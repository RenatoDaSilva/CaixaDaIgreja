function processImage(e) {
 if (!e.parameters.filename || !e.parameters.file || !e.parameters.imageformat) {
   return message("Error: Bad parameters in doPost");
 } else {
   var imgf = e.parameters.imageformat[0].toUpperCase();
   var mime =
       (imgf == 'BMP')  ? MimeType.BMP
     : (imgf == 'GIF')  ? MimeType.GIF
     : (imgf == 'JPEG') ? MimeType.JPEG
     : (imgf == 'JPG')  ? MimeType.JPEG
     : (imgf == 'PNG')  ? MimeType.PNG
     : (imgf == 'SVG')  ? MimeType.SVG
     : false;
   if (mime) {
     var data = Utilities.base64Decode(e.parameters.file, Utilities.Charset.UTF_8);
     var blob = Utilities.newBlob(data, mime, e.parameters.filename);
     DriveApp.getFolderById('1ZM5IgJ-pRFa-7VzvtsUBypSjJbVEcrNc').createFile(blob);
     return message("Success");
   } else {
     return message("Error: Bad image format");
   }
 }
}

function message(msg) {
 return ContentService.createTextOutput(JSON.stringify({Result: msg })).setMimeType(ContentService.MimeType.JSON);
}