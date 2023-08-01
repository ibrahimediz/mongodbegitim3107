use("kutuphane")



//##################################################
// $ne kullanımı eşit değil
//----------------------------------------
// db.getCollection("urunler").find({storage:{$ne:512}})
//##################################################




//##################################################
// $in kullanımı içinde 
//----------------------------------------
// db.getCollection("urunler").find({storage:{$in:[128,512]}})
// db.getCollection("urunler").find({color:{$in:["gold","white"]}})
// db.getCollection("urunler").find({"inventory.qty":{$in:[300,400]}})
//##################################################



//##################################################
// $nin kullanımı içinde değil
//----------------------------------------
// db.getCollection("urunler").find({storage:{$nin:[128,512]}})
// db.getCollection("urunler").find({color:{$nin:["gold","white"]}})
// db.getCollection("urunler").find({"inventory.qty":{$nin:[300,400]}})
//##################################################




//##################################################
// $and kullanımı 
//----------------------------------------
// db.getCollection("urunler").find({
//     $and:[
//         {price:899
//         },{
//             color:{
//                 $in:["while","black"]
//             }
//         }
//     ]},
//     {
//         name:1,
//         price:1,
//         color:1
//     }
//     )
// aynı alanın birlikte kullanımı
// db.getCollection("urunler").find({
//     $and:[
//         {price:{$gt:699}},
//         {price:{$lt:899}},
//     ]
// })
// YA DA 
// db.getCollection("urunler").find(
//         {price:{$gt:699,$lt:899}}
// )

//##################################################






//##################################################
// $or kullanımı 
//----------------------------------------
// db.getCollection("urunler").find({
//     $or:[
//         {price:899
//         },{
//             color:{
//                 $in:["while","black"]
//             }
//         }
//     ]},
//     {
//         name:1,
//         price:1,
//         color:1
//     }
//     )
// aynı başlıkta or kullanımı
// db.getCollection("urunler").find({
//     $or:[
//         {price:{$gt:699}},
//         {price:{$lt:899}},
//     ]
// })
//##################################################



//##################################################
// $and ve $or birlikte  kullanımı 
//----------------------------------------
// db.getCollection("urunler").find(
//     {
//         $and:[
//         {
//             $or:[
//                 {price:{$gt:500}},
//                 {"spec.ram":{$eq:4}}
//             ]
//         },
//         {
//             $or:[
//                 {price:{$lt:700}},
//                 {"spec.ram":{$eq:6}}
//             ]
//         }
//     ]
// }
// )
//##################################################

//##################################################
// $nor kullanımı 
//----------------------------------------
// db.getCollection("urunler").find(
//     {
//         $nor:[
//             {price:899},
//             {color:"gold"}
//         ]
//     }
// )
//##################################################


//##################################################
// $not kullanımı 
//----------------------------------------
// db.getCollection("urunler").find({
//     price:{$not:{$eq:699}}
// })

//##################################################


//##################################################
// $exists kullanımı 
//----------------------------------------
// db.getCollection("urunler").find({
//     price:{$exists:false}
// })
//##################################################