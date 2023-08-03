/*
databaseName = "sample_training"
collectionName = "zips"
use(databaseName)

California eyaletindeki şehilere 
ait toplam zip kodlarının sayınını listeleyelim.

*/


/*databaseName = "sample_training"
collectionName = "zips"
use(databaseName)*/

//db.getCollection(collectionName).findOne()

//db.getCollection(collectionName).find({"city":"CALIFORNIA"})

/*db.getCollection(collectionName).aggregate(
    {
    $match:{"state":"CA"}},
    {$group:{
        _id:"$city",
        zipcount: {$count: {}}
    }}
)


databaseName = "coffeeshop"
collectionName = "sales"
use(databaseName)

//db.getCollection(collectionName).findOne()

db.getCollection(collectionName).aggregate(
    {
    $match:{"item":"Americanos"}},
    {$group:{
        _id:"$size",
        sizecount: {$sum: "$quantity"}
    }},
    {$sort:{sizecount:-1}}
)*/



databaseName = "sample_training"
collectionName = "trips"
use(databaseName)

db.getCollection(collectionName).findOne()
/*
python üzerinde pymongo modülünü kullanarak 
1. sample training veritabanına bulunan trips koleksiyonun yer 
alan verilerden 
yıllara göre gruplanmış verileri üzerinden 
1968 ile 1975
 tarihleri arasındaki kayıtların 
yılara göre gruplandığında 
toplam seyahat süresini,yıl bilgisini 
bitiş istasyonu enlem (0) bilgisine göre sıralanmış halini 
raporlar veri tabanını içerisine ["isminiz"]_bisiklet_rapor şeklinde kaydedelim.
*/

db.getCollection(collectionName).aggregate(
    { 
         $group:{
            _id:"$birth year",
            toplamtrip:{ $sum:"$tripduration"}
            }
        },
    {
        $match:{_id:1980}
        }
)
