// var art = document.querySelector("article");

var site = ["https://twitter.com", "https://x.com"]
console.log("background.js loaded");



chrome.action.onClicked.addListener(async (tab) => {
    console.log("Click");
    for(var i = 0; i < site.length; i++) {
        if(!tab.url.startsWith(site[i])) return;
        else console.log("No!");
            console.log("Site!");
    }
});

chrome.action.setBadgeBackgroundColor(
    {color: [0, 255, 0, 0]},  // Green
    () => { /* ... */ },
  );