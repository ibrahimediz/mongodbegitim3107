databaseName = "kutuphane"
collectionName = "kahve" 
use(databaseName)

 db.getCollection(collectionName).findOne({isim:"Melek"});

 

 /* db.getCollection(collectionName).updateOne(
    {_id:ObjectId("64ca0d9258aa0b494cf1358f")},
    {
        $set:{
            yer:"İstanbul"
         },
         $push:{
            kupon:8
         }
    })*/