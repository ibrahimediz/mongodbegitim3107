databaseName ="kutuphane"
collectionName = "urunler2"

use(databaseName)
///set

//db.getCollection(collectionName).find()
//db.getCollection(collectionName).updateOne(
//    {_id:5},
//    {$set:{
//        price:1024
//    }}
//)

db.getCollection(collectionName).updateOne(
    {_id:5},
    {$set:{
        price:1099,
        "spec.ram":16
    }}
)
