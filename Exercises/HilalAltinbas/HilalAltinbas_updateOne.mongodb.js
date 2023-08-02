databaseName = "kutuphane"
collectionName = "kahve" 
use(databaseName);

db.getCollection(collectionName).find()


db.getCollection(collectionName).updateOne(
   {isim:"HilalAltinbas"},
   {
       $set:{
           kahve:"Quortado",
           "boyut": "grandy",
           fiyat: 0
       }
   }
   )

   db.getCollection(collectionName).find(   
    {isim:"HilalAltinbas"}
);
