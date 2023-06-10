// We open the main fucknestle window
chrome.windows.create({
    url: "mainwin/index.html",
    type: "popup",
    width: 800,
    height: 600,
    // We force the window into focus after it is created
}, function (popupWindow){
    chrome.windows.update(popupWindow.id, {focused: true});
});

// We close the launcher window after it gets spawned
window.close()