
/* kutuphane veritabanı içerisindeki dergi koleksiyonuna 
isim ve sayfa alanını kullanarak ekleme yapınız. Bu ekleme sırasında eklenecek olacak döküman için _id yi 
siz belirleyin
ardından replaceOne fonksiyonu ile yeni girmiş olduğunuz kaydı başka bir dökümanla yer değiştiriniz.
*/ 

databaseName = "kutuphane"
collectionName = "dergi" 
use(databaseName)

/*insert_data = {
    _id :9991,
    "isim":'melek',
    "sayfa":100
}


 db.getCollection(collectionName).insertOne(insert_data)*/

 //db.getCollection(collectionName).findOne({_id:9991});

 replace_data = {
    "isim":'melekozd',
    "sayfa":15
}


//db.getCollection(collectionName).find({_id:9991})


// db.collection.replaceOne(filter,replacement,options)
//db.getCollection(collectionName).replaceOne({_id:ObjectId("64c9febfebf5ff3366e48af1")},new_Data)

//db.getCollection(collectionName).replaceOne({_id:9991},replace_data)

//db.getCollection(collectionName).find({_id:9991})
