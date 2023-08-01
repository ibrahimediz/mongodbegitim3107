//databaseName = "sample_guides"
//collectionName = "planets"

//use(databaseName)
//db.getCollection(collectionName).find({
//    mainAtmosphere:{$size:3}
//},{_id:0,name:1})

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

db.getCollection(collectionName).find(
    {
       items:{
        $elemMatch:{
            name:"notepad",quantity:{$gte:1},price:{$lte:40}
        }
       }
    }
)

db.getCollection(collectionName).findOne()


