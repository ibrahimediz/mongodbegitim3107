/*

kutuphane veri tabanı içerisinde yer alan kitaplar koleksiyonunda;
categories alanı Mobile bilgisi içeren kayıtların;
isbn numaralarını ve categories alanını listeleyen sorguyu yazalım.
*/

use('kutuphane');

//db.getCollection("kitaplar").find({"categories":"Mobile"}, {_id: 0, "isbn": 1, "categories": 1});
//db.getCollection("urunler").find({"spec.ram":{$eq:4}},{});


db.getCollection("urunler").find({},{});

//db.getCollection("urunler").find({prince:{$lt:899}},{name:1, price:1});