databaseName = "sample_training"
collectionName = "trips"
use(databaseName)

/*

yukarıdaki bilgileri dikkate alarak kahve türüne göre,
minimum miktar,maksimum fiyat,ortalama fiyat bilgilerini listeleyen,
kahve siparişinin ismi ve boyutunun birlikte görüntüleyen bir başlığında yer aldığı sorgu çıktısını 
raporlar database için ["isminiz"]_kahverapor_1 koleksiyon adıyla kaydedelim.


db.getCollection(collectionName).aggregate(
    { 
         $group:{
            _id:{
                    isim:"$item",
                    boyut:"$size"
                },
            minQty:{
                $min:"$quantity"
            },
            maxQty:{
                $max:"$price"
            },
            ortalamaTutar:{
               $avg:{$multiply:["$quantity","$price"]}
            }
        }
    },
    {
        
        $set: {
            item:{$concat:["$_id.isim"," ","$_id.boyut"]}
        }
    },
   {
    $out:{db:"raporlar",coll:"Necmi_kahverapor_1"}
}
)



"""
python üzerinde pymongo modülünü kullanarak 
1. sample training veritabanına bulunan trips koleksiyonun yer alan verilerden 
yıllara göre gruplanmış verileri üzerinden 1968 ile 1975 tarihleri arasındaki kayıtların 
yılara göre gruplandığında 
toplam seyahat süresini,yıl bilgisini 
bitiş istasyonu enlem (0) bilgisine göre sıralanmış halini 
raporlar veri tabanını içerisine ["isminiz"]_bisiklet_rapor şeklinde kaydedelim.
"""
*/
db.getCollection(collectionName).find({})


db.getCollection(collectionName).aggregate(
    { 
         $group:{
            _id:"birth year",
            topSeyahat:{
               $sum:"$tripduration"
            }
    }
}
    
)

