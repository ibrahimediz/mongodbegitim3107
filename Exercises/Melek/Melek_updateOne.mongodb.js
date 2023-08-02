databaseName = "kutuphane"
collectionName = "kahve" 
use(databaseName)

 db.getCollection(collectionName).findOne({isim:"Melek"});