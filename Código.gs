function doGet(e) {
  var textOutput = getLastTenMovements();
  
  return ContentService.createTextOutput(textOutput);
}

function doPost(e) {
  processData(e.parameter);
  return "Posted it";
}