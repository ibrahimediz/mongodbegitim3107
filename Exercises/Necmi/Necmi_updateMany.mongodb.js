databaseName = "kutuphane"
collectionName = "urunler2" 
use(databaseName)


/* yukarıda bulunan kod bloğunu kullanarak söz konusu koleksiyon içerisindeki _id bilgisi 3 olan dökümanın price
alanını 300 oranında azaltın, aynı zamanda isim alanı ekleyerek güncelleyiniz
*/

db.getCollection(collectionName).updateMany(
    {_id:3},
    {
        $set:{isim:"Necmi"},
        $inc:{
            price:-300
        }
    }
    )
db.getCollection(collectionName).find({_id:3});    