
databaseName = "coffeeshop"
collectionName = "sales"
use(databaseName)
//##################################################
// $match kullanımı 
//----------------------------------------

db.getCollection(collectionName).find({},{})


//##################################################

/* 
// databaseName = "coffeeshop"
// collectionName = "sales"
// use(databaseName)

yukarıdaki bilgileri kullanarak siparişler arasında Americanos siparişlerinde boyutlarına göre kaç sipariş verilmiştir
büyükten küçüğe doğru sıralanmış bir şekilde listeleyelim.



db.getCollection(collectionName).aggregate(
    {
    $match:{item:"Americanos"}},
    {$group:{
        _id:"$size",
        siparisSum: {$sum:"$quantity"}
    }},
     {$sort:{siparisSum:-1}}
)*/

/* 
yukarıda bulunan sorguyu kullanarak 
ortalama tutarı 150 den büyük olan siparişleri 
küçükten büyüğe sıralayacak şekilde listeleyelim

*/

db.getCollection(collectionName).aggregate(
    {
        $group:{
            _id:"$item",
            ortalamaSayi:{
                $avg:{$multiply:["$quantity","$price"]}
            }
        }
    },
    {
                 $match:{
                    ortalamaSayi:{$gt:150}
                 }
             },
             {
                 $sort:{ortalamaSayi:1}
             }
)
