db.collection.replaceOne(filter,replacement,options)

databaseName = "kutuphane"
collectionName = "urunler" 
use(databaseName)

db.getCollection(collectionName).find({name:"SmartPad122"})
// db.getCollection(collectionName)

db.getCollection(collectionName).replaceOne({_id:ObjectId("64c9febfebf5ff3366e48af1")},new_Data)
