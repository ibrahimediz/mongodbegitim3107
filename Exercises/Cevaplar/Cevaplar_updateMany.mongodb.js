databaseName = "kutuphane"
collectionName = "kahve"
use(databaseName)

/* 
yukarıdaki bilgilerden faydalanarak isminizin bulunduğu sipariş dökümanlarındaki en düşük tutarın 1000 olması
ve tüm tutarların %20 oranında artması için  gereken kodu yazalım.
*/

// databaseName = "kutuphane"
// collectionName = "kahve"
// use(databaseName)
// db.getCollection(collectionName).updateMany(
//     {isim:"Cevaplar"},
//     {
//         $min:{fiyat:1000},
// }
// )

// db.getCollection(collectionName).updateMany(
//     {isim:"Cevaplar"},
//     {
//         $mul:{fiyat:1.2},
// }
// )