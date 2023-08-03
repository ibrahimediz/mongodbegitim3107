/*
databaseName = "sample_training"
collectionName = "zips"
use(databaseName)

California eyaletindeki şehilere 
ait toplam zip kodlarının sayınını listeleyelim.

*/


/*databaseName = "sample_training"
collectionName = "zips"
use(databaseName)*/

//db.getCollection(collectionName).findOne()

//db.getCollection(collectionName).find({"city":"CALIFORNIA"})

/*db.getCollection(collectionName).aggregate(
    {
    $match:{"state":"CA"}},
    {$group:{
        _id:"$city",
        zipcount: {$count: {}}
    }}
)*/


databaseName = "coffeeshop"
collectionName = "sales"
use(databaseName)

//db.getCollection(collectionName).findOne()

db.getCollection(collectionName).aggregate(
    {
    $match:{"item":"Americanos"}},
    {$group:{
        _id:"$size",
        sizecount: {$sum: "$quantity"}
    }},
    {$sort:{sizecount:-1}}
)
