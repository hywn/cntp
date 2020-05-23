const DISPLAY = document.querySelector('h1')
const INPUT   = document.querySelector('input')
const BUTTON  = document.querySelector('button')

chrome.storage.local.get('newtab_url', got => {

	if (got.newtab_url)
		INPUT.value = got.newtab_url

})

BUTTON.addEventListener('click', e => {

	chrome.storage.local.set({ newtab_url: INPUT.value })

	DISPLAY.innerHTML = `(tried) to set url to \`${INPUT.value}\`.`

})