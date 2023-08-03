
/*
//California eyaletindeki şehilere ait toplam zip kodlarının sayınını listeleyelim.

databaseName = "sample_training"
collectionName = "zips"
use(databaseName)

db.getCollection(collectionName).find();

db.getCollection(collectionName).aggregate(
    {
    $match:{"state":"CA"}},
    {$group:{
        _id:"$city",
        toplamZip: {$count: {}}
    }}
)
*/

databaseName = "coffeeshop"
collectionName = "sales"
use(databaseName)

db.getCollection(collectionName).find();