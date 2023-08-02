databaseName = "kutuphane"
collectionName = "urunler2"
use(databaseName)

/* yukarıda bulunan kod bloğunu kullanarak söz konusu koleksiyon içerisindeki _id bilgisi 3 
olan dökümanın price alanını 300 oranında azaltın
*/

db.getCollection(collectionName).find({_id:3});

db.getCollection(collectionName).updateMany(
    {_id:3},
    {
        $set:{isim:"Suat"}
    }
    )