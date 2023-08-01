databaseName = "kutuphane"
collectionName = "urunler"  //"kitaplar"


use(databaseName);

// db.getCollection(collectionName).find({"categories":"Mobile"},
// {_id:0,"isbn":1,"categories":1});

//db.getCollection(collectionName).find({"categories":{$eq:"Mobile"}},
//{_id:0,"isbn":1,"categories":1});


//kutuphane veri tabanı içerisinde yer alan urunler koleksiyonunda
//1. price alanı 899 dan küçük olanları name ve price alanlarının  listelenmesi
//2. spec içerisinde ram alanının 6 büyük olanlarının spec içindeki ram alanının ve name alanının listelenmesi
//3. storage alanında 256 dan büyük olan verilerin name ve storage alanının listelenmesi


db.getCollection(collectionName).find({price:{$lt:899}},{name:1,price:1});
db.getCollection(collectionName).find({"spec.ram":{$gt:6}},{spec:{ram:1},name:1});
db.getCollection(collectionName).find({storage:{$gt:256}},{name:1,storage:1});
//db.getCollection(collectionName).find();