databaseName = "sample_supplies"
collectionName = "sales"

use(databaseName);

db.getCollection(collectionName).find(
   /* {$and:[{"items.name":"notepad"},
    {quantity: {$gte:2}}]}
    */

    
);