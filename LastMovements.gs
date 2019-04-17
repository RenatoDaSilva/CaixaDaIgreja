function getLastTenMovements() {
  var ss = SpreadsheetApp.openById("1VWVyAY05CwA66j9jWAXkkiX-4kHqYEGUArLLHtv9TJ0");
  var sheet = ss.getSheets()[0];
    
  var date = "";
  var type = "";
  var value = "";
  var strReturn = "";
    
  var lastRow = sheet.getLastRow() < 11 ? 11 : sheet.getLastRow();
  for (var row = lastRow; row > lastRow - 10; row--) {
    var values = sheet.getRange(row, 1, 1, 5).getDisplayValues();

    type = values[0][3];
    date = values[0][1];
    
    value = values[0][4];
    value =  value.replace(".", "");
    value =  value.replace(",", ".");

    if (type != "") {
      strReturn += type + " em " + date + " no valor de " + value + ",";
    }
  }
  return strReturn.substring(0, strReturn.length - 1);
}