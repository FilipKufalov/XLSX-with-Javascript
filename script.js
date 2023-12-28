// Reference from https://stackoverflow.com/questions/72090694/best-way-to-read-an-xlsx-file-in-vanilla-javascript
// npm i xlsx

(async () => {
  const url = "Book1.xlsx"; // your online or local xlsx
  const data = await (await fetch(url)).arrayBuffer();
  const workbook = XLSX.read(data);
  manageData(workbook);
})();

var div = document.getElementById("employeeTable")

function manageData(data) {
  let table = data.Sheets.Sheet1;
  var values = Object.keys(table).map(key => table[key].v);
  values = values.filter(function (element) {
    return element !== undefined;
  });

  let table2 = document.createElement("table")
  var counter = 3
  for (let i = 0; i < values.length; i++) {
    if (counter % 3 == 0) {
      var tr = document.createElement("tr")
    }
    var tableData = document.createElement("td")
    tableData.innerText = values[i]
    tr.append(tableData)
    table2.append(tr)
    div.append(table2)
    counter++;
  }
}