//databaseName ="kutuphane"
//collectionName = "urunler2"

//use(databaseName)
///set

//db.getCollection(collectionName).find()
//db.getCollection(collectionName).updateOne(
//    {_id:5},
//    {$set:{
//        price:1024
//    }}
//)

databaseName ="kutuphane"
collectionName = "kahve"
use(databaseName)

db.getCollection(collectionName).find({isim:"Ozge"})

//olmayan field eklenir
//db.getCollection(collectionName).updateMany(
//    {_id:ObjectId("64ca0d9758aa0b494cf135b1")},
//    {$set:{
//        miktar:1
//    }}
//)

//sayısal degerin sonucu arttırılır
//db.getCollection(collectionName).updateMany(
//    {_id:ObjectId("64ca0d9758aa0b494cf135b1")},
//    {$inc:{
//        miktar:2
//    }}
//)

//listeye değer eklenir
//db.getCollection(collectionName).updateMany(
//    {_id:ObjectId("64ca0d9758aa0b494cf135b1")},
//    {$push:{
//        kupon:4
//    }}
//)

//birden fazla işlem yapılır
//db.getCollection(collectionName).updateMany(
//    {_id:ObjectId("64ca0d9758aa0b494cf135b1")},
//    {$set:{
//        yer:"Ankara"
//          }
//      $push:{
//        kupon:4
//          }
//      $inc:{
//        miktar:2
//          }
//        }
//)

//db.getCollection(collectionName).updateMany(
//    {"isim":"Ozge"},
//    {$set:{
//        fiyat:1000,
//        "boyut":"tall"
//    }}
//)

db.getCollection(collectionName).updateOne(
    {isim:"Ozge"},
    {$set:{
        yer:"Ankara"
          }
      $push:{
        kupon:4
          }
      $inc:{
        miktar:2
          }
        }
)
