
/*
//California eyaletindeki şehilere ait toplam zip kodlarının sayınını listeleyelim.

databaseName = "sample_training"
collectionName = "zips"
use(databaseName)

db.getCollection(collectionName).find();

db.getCollection(collectionName).aggregate(
    {
    $match:{"state":"CA"}},
    {$group:{
        _id:"$city",
        toplamZip: {$count: {}}
    }}
)


yukarıdaki bilgileri kullanarak siparişler arasında Americanos siparişlerinde boyutlarına göre kaç sipariş verilmiştir
büyükten küçüğe doğru sıralanmış bir şekilde listeleyelim.
*/

databaseName = "coffeeshop"
collectionName = "sales"
use(databaseName)

db.getCollection(collectionName).find();
/*
db.getCollection(collectionName).aggregate( // from 
     {
     $match:{"item":"Americanos"} // where
     },
     {$group:{   // group by
         _id:"$size",
         toplam:{$sum:"$quantity"} // columns
     }}, 
     {$sort:{toplam:-1}} // order by
 )

*/

,
//     {
//         $match:{
//             ucret:{$lte:400}
//         }
//     },
//     {
//         $sort:{ucret:-1}
//     }


db.getCollection(collectionName).aggregate(
    {
        $group:{
            _id:"$item",
            ortalamaTutar:{
                $avg:{$multiply:["$quantity","$price"]}
            }
        }
    },
)
/* 
yukarıda bulunan sorguyu kullanarak 
ortalama tutarı 150 den büyük olan siparişleri 
küçükten büyüğe sıralayacak şekilde listeleyelim

*/