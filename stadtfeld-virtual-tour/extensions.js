function transferHeight(height) {
    parent.postMessage(`documentHeight:${height}`, "*");
}

function redirectHomepage() {
    window.open("https://www.gymnasium-stadtfeld.de/digitaler-tag-der-offenen-tuer/", "", "");
}

function redirectPage(page) {
    window.open(page, "", "");
}