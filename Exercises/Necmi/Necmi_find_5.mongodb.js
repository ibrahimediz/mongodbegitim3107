use('sample_supplies')


db.getCollection('sales').find({
    $and:[
    {storeLocation:{$in:["Denver","London"]}},
    {items:{
    $elemMatch:{
    name:"binder",
    price:{$gt:10,$lt:30},
    tags:{$size:3}
    }
    }}
    ]
    });