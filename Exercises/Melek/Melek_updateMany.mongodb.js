databaseName = "kutuphane"
collectionName = "urunler2"
use(databaseName)

//db.getCollection(collectionName).findOne();


db.getCollection(collectionName).updateMany(
    {_id:3},
    {
        $inc:{
            price:-300
        },
        $set:{
            isim:"Melek"
        }
    }
    )
