// Reference from https://stackoverflow.com/questions/72090694/best-way-to-read-an-xlsx-file-in-vanilla-javascript
// npm i xlsx

(async() => {
    const url = "Book1.xlsx"; // your online or local xlsx
    const data = await (await fetch(url)).arrayBuffer();
    const workbook = XLSX.read(data);
    manageData(workbook.Strings);
  })();

  var div = document.getElementById("employeeTable")

  function manageData(data) {

    var table = document.createElement("table");
    var counter = 3                         // 3 depends on rows in xlsx file
    for (let i = 0; i < data.Count; i++) {  // ↓↓↓↓ 
        if (counter % 3 == 0)               // same here (my file contains 3 properties (FirstName,LastName & Email))
        {
            var tr = document.createElement("tr")
        }
        var tableData = document.createElement("td")
        tableData.innerText = data[i].h
        tr.append(tableData)
        table.append(tr)
        div.append(table)
        counter++;
    }
  }