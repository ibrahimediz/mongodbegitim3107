//##################################################
// $elemMatch birlikte  kullanımı 
//----------------------------------------
databaseName = "sample_supplies"
collectionName = "sales"
use(databaseName)
db.getCollection(collectionName).findOne()
db.getCollection(collectionName).find(
    {
        // $and:[
        //     {"items.name":{$eq:"notepad"}},
        //     {"items.quantity":{$gte:2}}

        // ]

        items:{
            $elemMatch:{
                name:"notepad",quantity:{$gte:1},price:{$lte:40}
            }
        }
    }

)
//##################################################