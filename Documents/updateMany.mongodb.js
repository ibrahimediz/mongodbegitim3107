/*
db.collection.updateMany(filter,update,options)
*/
databaseName = "kutuphane"
collectionName = "urunler2"
use(databaseName)
db.getCollection(collectionName).updateMany(
    {},
    {
        $set:{langugage:"TR"}
    }
    )

