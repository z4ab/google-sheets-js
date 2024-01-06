# google-sheets-js
 Node module to read data from google sheets. Note: this only works for public spreadsheets

### Use package
- Clone the repository
- Run `npm link` in the directory of the cloned repository
- Run `npm link google-sheets` in the directory of your project

## Example

```js
var sheets = require('google-sheets')

sheets.getSheetData({
    fileId: "1s4bd_hQSUWK1L2wRJQAYbNyJL6JNqaEEb6JuzVAfgBc",
    gid: "0",
    range: "A1:B3"
}).then(obj => {
    console.log(obj)
})
```
This code outputs the following:
```js
{ table: [ [ 'Key', 'Value' ], [ 'x', '1' ], [ 'y', '-10' ] ] }
```
