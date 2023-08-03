"""
python üzerinde pymongo modülünü kullanarak 
1. sample training veritabanına bulunan trips koleksiyonun yer 
alan verilerden 
yıllara göre gruplanmış verileri üzerinden 
1968 ile 1975
 tarihleri arasındaki kayıtların 
yılara göre gruplandığında 
toplam seyahat süresini,yıl bilgisini 
bitiş istasyonu enlem (0) bilgisine göre sıralanmış halini 
raporlar veri tabanını içerisine ["isminiz"]_bisiklet_rapor şeklinde kaydedelim.
"""

databaseName = "sample_training"
collectionName = "trips"
use(databaseName)

"""db.getCollection(collectionName).aggregate(
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
    }
)"""