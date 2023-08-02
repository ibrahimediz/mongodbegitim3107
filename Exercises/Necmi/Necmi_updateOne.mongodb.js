/* 
1. Kutuphane veritabanında yer alan kahve koleksiyonundan 
isminize ait siparişlerin listelenmesi
*/
databaseName = "kutuphane"
collectionName = "kahve" 
use(databaseName)
//db.getCollection(collectionName).find({isim:"Necmi"})


db.getCollection(collectionName).updateOne(
    {isim:"Necmi"},
    {
        $set:{
            kahve:"Cappucino",
            boyut: "tall",
            fiyat: 1000,
            yer: "İzmir",
        },
        $push:{
             kupon:4
        }
    }
    )
 
    db.getCollection(collectionName).find(   
     {isim:"Necmi"}
 );