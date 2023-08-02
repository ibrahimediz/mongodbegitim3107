/*
db.collection.findAndModify(query,update,new) 
*/

databaseName = "kutuphane"
collectionName = "urunler2"
use(databaseName)

db.getCollection(collectionName).findAndModify(
    {
    query: {_id:3},
    update: {$inc:{price:-100},$set:{isim:"Cevaplar"}},
    new:true
    }
)