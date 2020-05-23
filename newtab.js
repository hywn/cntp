chrome.storage.local.get('newtab_url', got => {

	const newtab_url = got.newtab_url

	if (!newtab_url) {
		document.querySelector('body').innerHTML = 'you have not set the newtab url! set it <a href="options.html">here</a>.'
		return
	}

	chrome.tabs.update({ url: newtab_url })

})