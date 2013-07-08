# GoogleAnalyticsOutboundLinkTracker
===============
* Author: Ralph Slooten, changed to Universal Analytics by Roel Willems													
* Version: 1.0

## Description
Ralph Slooten (axllent.org) has writen an guide (and script) on how to measure clicks on outbound links automatically. This script is writen to work the Google Analytics ga.js tracking code. Although ga.js is still functional (and will be supported by the Google Analytics team in the future) Universal Analytics launched recently and is available as public beta.

### Automatically track external links with Universal Analytics
I’ve edditted the code by Ralph to accomodate for this change in the Google Analytics tracking technique. This means that the link recognition part is unaltered but I’ve only changed the event tracking part to Universal Analytics (so all credits are for Ralph, I’m mearly sharing the changes to save others some work).

Below you will find the script updated for Universal Analytics. Please take in account the following remarks:

1. Update `ga('create', 'UA-XXXXX-X’);` to reflect your Universal Analytics account (this has to be a newly created web property, migrating from a ga.js web property to Universal Analytics is unavailable at this moment);
2. The regular script part [^1] should be placed before this script;
3. The events naming can be altered by changing the line beginning with: ga('send', 'event', ‘... .

Hope this script serves you well!


[^1]: With “regular” script part I’m referring to the code which includes the analytics.js file to the website which should look very similar to: `<!-- Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
</script>
<!-- End Google Analytics —>`

[trackoutbound]: http://www.axllent.org/docs/programming-tips/google-analytics/#automatically-track-outbound-links-using-async
[axllent]: http://www.axllent.org/