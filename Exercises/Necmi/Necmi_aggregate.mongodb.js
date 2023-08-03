
databaseName = "sample_training"
collectionName = "zips"
use(databaseName)
//##################################################
// $match kullanımı 
//----------------------------------------


db.getCollection(collectionName).aggregate(
    {
    $match:{"state":"CA"}},
    {$group:{
        _id:"$city",
        toplamZip: {$count: {}}
    }}
)
//##################################################