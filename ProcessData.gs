function processData(req) {
  var now = new Date();
  var date = new Date(req.year, req.month - 1, req.day);
  var strDate = Utilities.formatDate(date, 'BRT', "dd/MM/yyyy");

  var type = req.type;
  var strType = type == 0 ? "Entrada" : "Saída";

  var description = req.description;
  
  var value = req.value;

  var ss = SpreadsheetApp.openById("1VWVyAY05CwA66j9jWAXkkiX-4kHqYEGUArLLHtv9TJ0");
  var sheet = ss.getSheets()[0];
    
  var nextRow = sheet.getLastRow() + 1;
  var fiscalMonthFormula = "=EOMONTH(B" + nextRow + ";0)";
  var fiscalValueFormula = '=IF(D' + nextRow + '="Entrada";1;-1)*E' + nextRow;
  
  var pictureLink = req.picture;

  sheet.appendRow([now, strDate, description, strType, value, fiscalMonthFormula, fiscalValueFormula, pictureLink]);

  sheet.getRange('B:B').setNumberFormat('dd/MM/yyyy');
  sheet.getRange('E:E').setNumberFormat('[$R$ -416]#,##0.00');
}