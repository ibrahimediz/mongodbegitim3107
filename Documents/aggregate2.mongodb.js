
databaseName = "sample_training"
collectionName = "zips"
use(databaseName)
//##################################################
// $project kullanımı 
//----------------------------------------
// db.getCollection(collectionName).aggregate(
//     {
//         $match:{state:"CA"}
//     },
//     {
//         $project:
//         {
//             state:1,
//             zip:1,
//             _id:0,
//             nufus:"$pop",
//             sehirismi:{
//                 $cond: {
//                 if:{$lt:[9000,"$pop"]}, 
//                     then:"$city",
//                 else:
//                    "$$REMOVE"
//             }
//         }
//     }
//     }
// )




//##################################################


//##################################################
// $set kullanımı 
//----------------------------------------
// db.getCollection(collectionName).aggregate(
//     {
//         $match:{state:"CA"}
//     },
//     {
//         $set:
//         {
//             state:1,
//             zip:1,
//             _id:0,
//             nufus:"$pop"
//         }
//     }
// )

//##################################################