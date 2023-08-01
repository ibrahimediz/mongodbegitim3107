databaseName = "kutuphane"
collectionName = "urunler"

use(databaseName)

db.getCollection(collectionName).find(
    {
        //price:{$exists:1}
    },
    {_id:0,
        name:1,
        price:1
    }
).sort({
    price:-1//1
    ,name:1
})

//pythonda karakterlerin orderlarına bakmak ıcın
//print(ord("s"))

//limit and skip

db.getCollection(collectionName).find({},
    {
        name:1,price:1
    }
).limit(2)
