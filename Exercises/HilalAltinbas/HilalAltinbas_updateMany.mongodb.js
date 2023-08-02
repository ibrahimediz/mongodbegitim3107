databaseName = "kutuphane"
collectionName = "kahve"
use(databaseName)

    
db.getCollection(collectionName).updateMany(
    {isim:"HilalAltinbas"},
    {
        $min:{
            fiyat:1100
        }
    }
    )
   
    

//db.getCollection(collectionName).find({isim:"HilalAltinbas"});

