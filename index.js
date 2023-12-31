const jsdom = require('jsdom');

function toObject(site) {
    const doc = new jsdom.JSDOM(site).window.document;
    let rows = [...doc.querySelector("tbody").children]
    let data = {}
    data['table'] = rows.map(r => [...r.children].slice(1).map(e => {
        if (e.querySelector("use")) {
            let ref = e.querySelector("use").getAttribute("href");
            return ref === "#checked-checkbox-id" ? "TRUE" : "FALSE";
        }
        return e.textContent;
    }))
    return data;
}
async function getSheetData(config) {
    let {fileId, gid, range} = config;
    let url = `https://docs.google.com/spreadsheets/d/${fileId}/htmlembed/sheet?gid=${gid}&range=${range}`
    return fetch(url)
        .then(res => res.text())
        .then(text => toObject(text))
}
module.exports = {
    getSheetData,
}