databaseName = "coffeeshop"
collectionName = "sales"
use(databaseName)

/*

yukarıdaki bilgileri dikkate alarak kahve türüne göre,
minimum miktar,maksimum fiyat,ortalama fiyat bilgilerini listeleyen,
kahve siparişinin ismi ve boyutunun birlikte görüntüleyen bir başlığında yer aldığı sorgu çıktısını 
raporlar database için ["isminiz"]_kahverapor_1 koleksiyon adıyla kaydedelim.
*/

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
    $out:{db:"raporlar",coll:"Cevaplar_kahverapor_1"}
}
)