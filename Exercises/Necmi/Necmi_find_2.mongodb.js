
use('sample_analytics')

db.getCollection("accounts").find({
    $and:[
        {limit:{
            $gte:10000
        }},
        {products:{
            $in:["InvestmentStock","Derivatives"]}
        }
    ]
})


//db.getCollection('urunler').find({price:{$lt:899}},{name:1,price:1});

//db.getCollection('urunler').find({"spec.ram":{$gt:6}},{spec:{ram:1},name:1});
//db.getCollection('urunler').find({storage:{$gt:256}},{name:1,storage:1});


//db.getCollection("urunler").find({},{})
//db.getCollection("urunler").find("price",{$lt:899},{name:1,price:1})