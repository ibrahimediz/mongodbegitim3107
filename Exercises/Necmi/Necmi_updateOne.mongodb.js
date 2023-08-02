/* 
1. Kutuphane veritabanında yer alan kahve koleksiyonundan 
isminize ait siparişlerin listelenmesi
*/
databaseName = "kutuphane"
collectionName = "kahve" 
use(databaseName)
db.getCollection(collectionName).find({isim:"Necmi"})
