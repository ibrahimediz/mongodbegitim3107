databaseName = "sample_supplies"
collectionName = "sales"

use(databaseName)
//db.getCollection(collectionName).findOne()
//db.getCollection(collectionName).find(
//    {
//        $and:[
//            {"items.name":{$eq:"notepad"}},
//            {"items.quantity":{gte:2}}
//        ]
//    }
//)



//db.getCollection(collectionName).find(
//    {
//       items:{
//        $elemMatch:{
//            name:"notepad",quantity:{$gte:1},price:{$lte:40}
//        }
//       }
//    }
//)

// soru
db.getCollection(collectionName).find(
    {
    $and:[
            {storeLocation:{$in:["Denver","London"]}},
            {items:{
            $elemMatch:{
                name:"binder",tags:{$size:3},price:{$lte:30},price:{$gte:10}
            }
        }}
        ]
    }
)


