This Plunker demonstrates the service worker's `fetch` handler. It prints the
URL of all fetch requests in the console. See [Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
for more details.

If modifying the Plunker's service worker script, remember to delete the currently
registered service worker from your browser:

 1. Go to *DevTools > Resources (or Applications) tab*.
 2. Click *Service Workers* on left panel.
 3. The service worker on the page should appear on the right. Click *Delete* to remove it.
 4. From the Live Preview panel, rerun the Plunker twice (once to install, and again to activate).
 5. Check the console log for fetch events.

http://stackoverflow.com/questions/37718551/can-javascript-or-serviceworkers-detect-network-activity-ajax-events