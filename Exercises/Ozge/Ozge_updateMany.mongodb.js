databaseName ="kutuphane"
collectionName = "urunler2"
use(databaseName)


db.getCollection(collectionName).updateMany(
    {_id:3},
    {$set:{
        isim:"Ozge"
          },
      $inc:{
        price:-300
          }
        }
)


db.getCollection(collectionName).find({_id:3})