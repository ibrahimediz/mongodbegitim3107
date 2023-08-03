/*

yukarıdaki bilgileri dikkate alarak kahve türüne göre,
minimum miktar,maksimum fiyat,ortalama fiyat bilgilerini listeleyen,
kahve siparişinin ismi ve boyutunun birlikte görüntüleyen bir başlığında yer aldığı sorgu çıktısını 
raporlar database için ["isminiz"]_kahverapor_1 koleksiyon adıyla kayded
*/

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