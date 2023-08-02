databaseName = "kutuphane"
collectionName = "kahve"
use(databaseName)

/* yukarıda bulunan kod bloğunu kullanarak söz konusu koleksiyon içerisindeki _id bilgisi 3 
olan dökümanın price alanını 300 oranında azaltın
*/



    db.getCollection(collectionName).find();
    
db.getCollection(collectionName).updateMany(
    {_id:3},
    {
        $set:{isim:"Hilal"},
        $inc:{
            price:-300
        }
    }
    )