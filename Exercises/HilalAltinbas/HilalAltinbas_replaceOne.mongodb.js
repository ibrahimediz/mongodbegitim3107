databaseName = "kutuphane"
collectionName = "dergi" 
use(databaseName)

db.getCollection(collectionName).find();





//db.getCollection(collectionName).replaceOne({_id:ObjectId("64c8dfc69d4f9d8f567c37cc")},new_Data)


new_Data = {
    "_id": {
      "$oid": "64c8dfc69d4f9d8f567c37cc"
    },
    "isim": "python",
    "sayfa": "120",
    "fiyat": "300"
  }