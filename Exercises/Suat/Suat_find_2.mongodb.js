/*

kutuphane veri tabanı içerisinde yer alan kitaplar koleksiyonunda;
categories alanı Mobile bilgisi içeren kayıtların;
isbn numaralarını ve categories alanını listeleyen sorguyu yazalım.
*/

use('kutuphane');

db.getCollection("kitaplar").find({});
