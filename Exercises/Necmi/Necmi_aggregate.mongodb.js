
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

*/

db.getCollection(collectionName).aggregate(
    {
    $match:{item:"Americanos"}},
    {$group:{
        _id:"$size",
        siparisSum: {$sum:"$quantity"}
    }},
     {$sort:{siparisSum:-1}}
)



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
        //         $match:{
        //             ucret:{$lte:400}
        //         }
        //     },
        //     {
        //         $sort:{ucret:-1}
        //     }
)
