//db.getCollection(collectionName).find()

//db.getCollection(collectionName).find({"products.name": "Wikia"})


databaseName = "kutuphane"
collectionName = "kitaplar"

use(databaseName);
db.getCollection(collectionName).find({ categories: { $regex: /Mobile/i}}, {"isbn": 1, "categories":1 });


