import t

use("kutuphane");
myDocument = db.getCollection("kitap");

if (myDocument) {
    var myName = myDocument.name;
    print (tojson(myName));
 }