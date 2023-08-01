//##################################################
// $gt büyüktür
// $gte büyük eşit
// $lt küçüktür
// $lte küçük eşit
//----------------------------------------
// db.getCollection("urunler").find({price:{$gt:699}},{name:1,price:1})
// db.getCollection("urunler").find({price:{$lt:699}},{name:1,price:1})
// db.getCollection("urunler").find({"spec.ram":{$gt:8}},{name:1,price:1,spec:{ram:1}})
// db.getCollection("urunler").find({"spec.ram":{$gte:8}},{name:1,price:1,spec:{ram:1}})
// db.getCollection("urunler").find({storage:{$gt:128}},{name:1,price:1,storage:1})

/* 

kutuphane veri tabanı içerisinde yer alan urunler koleksiyonunda
1. price alanı 899 dan küçük olanları name ve price alanlarının  listelenmesi
2. spec içerisinde ram alanının 6 büyük olanlarının spec içindeki ram alanının ve name alanının listelenmesi
3. storage alanında 256 dan büyük olan verilerin name ve storage alanının listelenmesi

*/

use('kutuphane');

db.getCollection("urunler").find({price:{$lt:899}},{name:1,price:1});
db.getCollection("urunler").find({"spec.ram":{$gt:6}},{spec:{ram:1, name:1}})
db.getCollection("urunler").find({storage:{$gt:256}},{name:1,storage:1})
