//databaseName = "kutuphane"
//collectionName = "urunler2" 
//use(databaseName)


/* yukarıda bulunan kod bloğunu kullanarak söz konusu koleksiyon içerisindeki _id bilgisi 3 olan dökümanın price
alanını 300 oranında azaltın, aynı zamanda isim alanı ekleyerek güncelleyiniz
*/

//db.getCollection(collectionName).updateMany(
//    {_id:3},
//    {
//        $set:{isim:"Necmi"},
//        $inc:{
//            price:-300
//        }
//    }
//    )
//db.getCollection(collectionName).find({_id:3});   


databaseName = "kutuphane"
collectionName = "kahve"
use(databaseName)

/* yukarıdaki bilgilerden faydalanarak isminizin bulunduğu sipariş dökümanlarındaki en düşük tutarın 1000 olması
ve tüm tutarların %20 oranında artması için  gereken kodu yazalım.
*/

db.getCollection(collectionName).updateMany(
    {isim:"Necmi"},
    {
        $min:{fiyat:1000},
    }
    )

db.getCollection(collectionName).updateMany(
        {isim:"Necmi"},
        {
            $mul:{
                price:1.20
            }
        }
)   
db.getCollection(collectionName).find({isim:"Necmi"});  