# cntp (chrome newtab plugin)
was tired of using other newtab plugins so I made my own

## files, explained
```
manifest.json -- chrome plugin configuration
newtab.html   -- replaces chrome://newtab. runs newtab.js
newtab.js     -- redirects user to custom url
options.html  -- lets you configure custom url
options.js    -- javascript related to options.html (chrome doesn't let you do inline <script> in plugin files)
```

## how to add to chrome (if you want to)
1. clone repository
2. go to chrome extension settings
3. enable developer mode
4. click 'load unpackaged' and select the repository folder
