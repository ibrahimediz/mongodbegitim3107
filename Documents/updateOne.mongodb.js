/*
db.collection.updateOne(filter,update,options)

$set
$upset
$inc
$push
*/
databaseName = "kutuphane"
collectionName = "urunler2"
use(databaseName)
// ###############################
// $set
db.getCollection(collectionName).find() // => _id : 4
db.getCollection(collectionName).updateOne(
    {_id:4},
    {
        $set:{
            price:1099,
            "spec.ram":16, // embeded document
            "spec.screen":12.3,
            "spec.cpu":2.80,
            "storage.0": 256,
            "storage.1": 512
        }
    }
    )
// db.getCollection(collectionName).find(