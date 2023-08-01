use("sample_analytics")



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
db.getCollection("accounts").find({
    $and:[
        {limit:{$gte:10000}
        },{
            products:{
                $in:["InvestmentStock","Derivatives"]
            }
        }
    ]}    )

    
// aynı alanın birlikte kullanımı
// db.getCollection("urunler").find({
//     $and:[
//         {price:{$gt:699}},
//         {price:{$lt:899}},
//     ]
// })
// YA DA 
//db.getCollection("urunler").find(
  //      {price:{$gt:699,$lt:899}}
//)