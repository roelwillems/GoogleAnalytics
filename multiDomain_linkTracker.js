var trackedDomains = "";
// URI / subdomains seperated with a space

jQuery("body").on("click", "a", function(ev) {
    // only work on external links
    if (this.href.match(/^javascript\:/) ||
        this.href.match(/^mailto\:/) ||
        (this.hostname == location.hostname)) return;

    // check whether target domain is in list
    if (trackedDomains) {
        domain = this.hostname;
        b = false;
        doms = trackedDomains.split(/\s+/);
        for (i = 0; i < doms.length; i++) {
            if (doms[i] == domain) {
                b = true;
                break;
            }
        }
        if (!b) return;
    }

    if (_gaq) {
        _gaq.push(['_link', this.href]);
    } else if (pageTracker) {
        pageTracker._link(this.href);
    } else {
        // shouldn't happen
        return;
    }
    ev.preventDefault();
});

jQuery("form").live("submit", function(ev) {
    if (!this.action) return;
    m = this.action.match(/^http(?:s?)\:\/\/(.+?)\//);
    if (m == null) return;
    domain = m[1];
    
    // check whether target domain is in list
    if (trackedDomains) {
        b = false;
        doms = trackedDomains.split(/\s+/);
        for (i = 0; i < doms.length; i++) {
            if (doms[i] == domain) {
                b = true;
                break;
            }
        }
        if (!b) return;
    }

    if (_gaq) {
        _gaq.push(['_linkByPost', this]);
    } else if (pageTracker) {
        pageTracker._linkByPost(this);
    } else {
        // shouldn't happen
    }
});
