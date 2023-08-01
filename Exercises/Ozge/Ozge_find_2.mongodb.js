/*

kutuphane veri tabanı içerisinde yer alan kitaplar koleksiyonunda;
categories alanı Mobile bilgisi içeren kayıtların;
isbn numaralarını ve categories alanını listeleyen sorguyu yazalım.
*/

use("kutuphane")

//db.getCollection("kitaplar").findOne({"categories":"Mobile"},{_id:0,"isbn":1,"categories":1})

// embedded
//db.getCollection("urunler").find({},{name:1,price:1,spec:{ram:1}})
//db.getCollection("urunler").find({},{name:1,price:1,"spec.raw":1})
//db.getCollection("urunler").find({},{name:1,price:1,"inventory.qty":1})
//db.getCollection("urunler").find({},{name:1,price:1,inventory:{qty:1}})
//eq kullanımı
//db.getCollection("urunler").find({price:{$eq:899}},{name:1,price:1,pec:{ram:1}})
//db.getCollection("urunler").find({"spec.ram":{$eq:4}},{})
//db.getCollection("urunler").find({color:{$eq:"black"}},{})
//date 
//db.getCollection("urunler").find({releaseDate:{$eq:new ISODate("2020-05-14")}},{})
//1
db.getCollection("urunler").find({price:{$lt:899}},{name:1,price:1})
//2
db.getCollection("urunler").find({"spec.ram":{$gt:6}},{"spec.ram":1,price:1})
//3
db.getCollection("urunler").find({storage:{$gt:256}},{name:1,storage:1})




