/*

yukarıdaki bilgileri dikkate alarak kahve türüne göre,
minimum miktar,maksimum fiyat,ortalama fiyat bilgilerini listeleyen,
kahve siparişinin ismi ve boyutunun birlikte görüntüleyen bir başlığında yer aldığı sorgu çıktısını 
raporlar database için ["isminiz"]_kahverapor_1 koleksiyon adıyla kayded
*/
/*
databaseName = "coffeeshop"
collectionName = "sales"
use(databaseName)

db.getCollection(collectionName).find();

db.getCollection(collectionName).aggregate(

        $project:{
            item:{
                $concat:["$item"," ","$size"]
            },
            minQty:{
                $min:"$quantity"
            },
            maxQty:{
                $max:"$price"
            },
            avgPrice:{
                  $avg:"$price"
          }
        }           
    },
    {
        $out:"Hilal_kahverapor_1"
    } 
)

db.getCollection("Hilal_kahverapor_1").find();


"""
python üzerinde pymongo modülünü kullanarak 
1. sample training veritabanına bulunan trips koleksiyonun yer alan verilerden 
yıllara göre gruplanmış verileri üzerinden 1968 ile 1975 tarihleri arasındaki kayıtların 
yılara göre gruplandığında 
toplam seyahat süresini,yıl bilgisini 
bitiş istasyonu enlem (0) bilgisine göre sıralanmış halini 
raporlar veri tabanını içerisine ["isminiz"]_bisiklet_rapor şeklinde kaydedelim. */

databaseName = "sample_training"
collectionName = "trips"
use(databaseName)

db.getCollection(collectionName).find();

db.getCollection(collectionName).aggregate({
    $group:{
        _id:"$birth year",
        toplamSeyahatSuresi:{ $sum:"tripduration"},
    }},{
    $match:{
        _id:{$gt:1968,$lt:1975}
    }
}
)