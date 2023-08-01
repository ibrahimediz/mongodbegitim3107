/* sample_analytics veritabanında 
accounts koleksiyonu içerisinde yer alan veriler üzerinden
limit 10000 den büyük ve eşit VE 
products alanında InvestmentStock,Derivatives ifadelerini barındıran verilerin listelenmesi
*/
/*
use("sample_analytics")

db.getCollection("accounts").find({
    $and:[
        {limit:{
            $gte:10000
        }},
        {products:{
            $in:["InvestmentStock","Derivatives"]}
        }
    ]
})
*/

/* sample_airbnb veritabanında listingsAndReviews koleksiyonun da
image başlığı olmayan kayıtların ve minimum_nights başlığının 1 e eşit olduğu
kayıtların listelenmesi
*/


databaseName = "sample_airbnb"
collectionName = "listingsAndReviews"

use(databaseName);

db.getCollection(collectionName).find({$and:[{}{}]})