function _gaLt(event){
	var el = event.srcElement || event.target;

	/* Loop up the tree through parent elements if clicked element is not a link (eg: an image in a link) */
	while(el && (typeof el.tagName == 'undefined' || el.tagName.toLowerCase() != 'a' || !el.href))
		el = el.parentNode;

	if(el && el.href){
		if(el.href.indexOf(location.host) == -1){ /* external link */

		 ga('send', 'event', 'Outgoing Links', el.href, document.location.pathname + document.location.search,  {'nonInteraction': 1});
			/* if target not set delay opening of window by 0.5s to allow tracking */
			if(!el.target || el.target.match(/^_(self|parent|top)$/i)){
				setTimeout(function(){
					document.location.href = el.href;
				}.bind(el),500);
				/* Prevent standard click */
				event.preventDefault ? event.preventDefault() : event.returnValue = !1;
			}
		}

	}
}

/* Attach the event to all clicks in the document */
var d = document;
d.addEventListener ? d.addEventListener("click",_gaLt,!1) : d.attachEvent && d.attachEvent("onclick",_gaLt);