// /*
// databaseName = "sample_training"
// collectionName = "zips"
// use(databaseName)

// California eyaletindeki şehilere ait toplam zip kodlarının sayınını listeleyelim.

// */


// databaseName = "sample_training"
// collectionName = "zips"
// use(databaseName)
// db.getCollection(collectionName).aggregate(
//     {
//     $match:{"state":"CA"}},
//     {$group:{
//         _id:"$city",
//         zipcount: {$count: {}}
//     }}
// )
/* 
// databaseName = "coffeeshop"
// collectionName = "sales"
// use(databaseName)

yukarıdaki bilgileri kullanarak siparişler arasında Americanos siparişlerinde boyutlarına göre kaç sipariş verilmiştir
büyükten küçüğe doğru sıralanmış bir şekilde listeleyelim.

*/

databaseName = "coffeeshop"
collectionName = "sales"
use(databaseName)

// db.getCollection(collectionName).aggregate(
//     {
//         $match:{
//             item:"Americanos"
//         }
//     },
//     {
//         $group:{
//             _id:"$size",
//             toplam:{
//                 $sum:"$quantity"
//             }
//         }
//     },
//     {
//         $sort:{toplam:-1}
//     }
// )



// db.getCollection(collectionName).aggregate(
//     {
//         $match:{
//             item:"Americanos"
//         }
//     },
//     {
//         $group:{
//             _id:"$size",
//             ucret:{
//                 $sum:{$multiply:["$price","$quantity"]}
//             }
//         }
//     },
//     {
//         $sort:{ucret:-1}
//     }
// )


// db.getCollection(collectionName).aggregate(
//     {
//         $group:{
//             _id:"$item",
//             ucret:{
//                 $sum:{$multiply:["$price","$quantity"]}
//             }
//         }
//     },
//     {
//         $match:{
//             ucret:{$lte:400}
//         }
//     },
//     {
//         $sort:{ucret:-1}
//     }
// )



// db.getCollection(collectionName).aggregate(
//     {
//         $group:{
//             _id:"$item",
//             ortalamaSayi:{
//                 $avg:"$quantity"
//             }
//         }
//     },
// )


databaseName = "coffeeshop"
collectionName = "sales"
use(databaseName)

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
