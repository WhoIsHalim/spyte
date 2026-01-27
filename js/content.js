// Spyte Content Script
// minimal message passing if needed

window.addEventListener('message', function(event) {
    // Only accept messages from the same frame
    if (event.source !== window) {
        return;
    }

    var message = event.data;

    // Only accept messages that we know are ours
    if (typeof message !== 'object' || message === null || !message.spyId) {
        return;
    }

    // console.log('content script forwards the message');

    chrome.runtime.sendMessage(message);
});

console.log('Spyte content script loaded');

chrome.runtime.sendMessage({spyId:'init',url:'none',res:'ok'});
