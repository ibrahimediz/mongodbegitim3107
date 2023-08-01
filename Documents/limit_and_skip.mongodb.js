databaseName = "kutuphane"
collectionName = "urunler" 
use(databaseName)
db.getCollection(collectionName).find({},
    {name:1,price:1}
)