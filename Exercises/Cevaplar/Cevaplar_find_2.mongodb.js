// /*

// kutuphane veri tabanı içerisinde yer alan kitaplar koleksiyonunda;
// categories alanı Mobile bilgisi içeren kayıtların;
// isbn numaralarını ve categories alanını listeleyen sorguyu yazalım.
// */
// use("kutuphane");

// db.getCollection("kitaplar").find({"categories":"Mobile"},{_id:0,"isbn":1,"categories":1})


/* 

kutuphane veri tabanı içerisinde yer alan urunler koleksiyonunda
1. price alanı 899 dan küçük olanları name ve price alanlarının  listelenmesi
2. spec içerisinde ram alanının 6 büyük olanlarının spec içindeki ram alanının ve name alanının listelenmesi
3. storage alanında 256 dan büyük olan verilerin name ve storage alanının listelenmesi

*/
use("kutuphane");
// 1.
// db.getCollection("urunler").find({price:{$lt:899}},{name:1,price:1})
// 2. 
// db.getCollection("urunler").find({"spec.ram":{$gt:6}},{name:1,spec:{ram:1}})
// 3. 
// db.getCollection("urunler").find({"storage":{$gt:256}},{name:1,storage:1})