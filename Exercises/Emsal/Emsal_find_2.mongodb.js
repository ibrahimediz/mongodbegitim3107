//db.getCollection(collectionName).find()

//db.getCollection(collectionName).find({"products.name": "Wikia"})


databaseName = "kutuphane"
collectionName = "kitaplar"

use(databaseName);
//db.getCollection(collectionName).find({ categories: { $regex: /Mobile/i}}, {"isbn": 1, "categories":1 });
// db.getCollection("urunler").find({},{});
//db.getCollection("urunler").find({}, {name:1,price:1, "spec.name":1});
//db.getCollection("urunler").find({price:{$eq:899}},{});

db.getCollection("urunler").find({price:{$gt: 899}},{"name":1, "price":1});


