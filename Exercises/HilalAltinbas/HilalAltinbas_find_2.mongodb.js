databaseName = "kutuphane"
collectionName = "urunler"  //"kitaplar"


use(databaseName);

// db.getCollection(collectionName).find({"categories":"Mobile"},
// {_id:0,"isbn":1,"categories":1});

//db.getCollection(collectionName).find({"categories":{$eq:"Mobile"}},
//{_id:0,"isbn":1,"categories":1});

db.getCollection(collectionName).find({price:{$lt:899}},{name:1,price:1});
db.getCollection(collectionName).find({},{spec});