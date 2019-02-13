gBrowser.tabContainer.addEventListener('dblclick', function(event) {
	if (event.target.localName == 'tab' && event.button == 0) {
		document.getElementById('urlbar').focus();
	}
});
