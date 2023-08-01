//use("kutuphane")

//ne
//db.getCollection("urunler").find({storage:{$ne:512}})

//in
//db.getCollection("urunler").find({color:{$in:[128,512]}})
//db.getCollection("urunler").find({storage:{$in:["gold","white"]}})

//nin
//db.getCollection("urunler").find({storage:{$nin:["gold","white"]}})

//and
//db.getCollection("urunler").find({
//    $and:[
//        {price:899
//        },{
//            color:{$in:["white","black"]}
//        }]
//    },
 //   {name:1,price:1,color:1}
//    )

//soru

//use("sample_analytics")

//db.getCollection("accounts").find(
//    {
//        $and:[
//            {limit:{$gte:10000}},
//            {products:{$in:["InvestmentStock","Derivatives"]}}
//        ]
//    }
//)

//or
db.getCollection("urunler").find({
    $and:[
        {price:899
        },{
            color:{$in:["white","black"]}
        }]
    },
   {name:1,price:1,color:1}
    )