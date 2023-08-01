databaseName = "sample_airbnb"
collectionName = "listingsAndReviews" 

use(databaseName);

/* sample_analytics veritabanında 
accounts koleksiyonu içerisinde yer alan veriler üzerinden
limit 10000 den büyük VE p
roducts alanında InvestmentStock,Derivatives ifadelerini barındıran verilerin listelenmesi
*/

/*db.getCollection(collectionName).find({
    $and:[{
        limit:{$gte:10000},
        products:{ $in:["InvestmentStock","Derivatives"]}
    }]
});
*/

/* sample_airbnb veritabanında listingsAndReviews koleksiyonun da
image başlığı olmayan kayıtların ve minimum_nights başlığının 1 e eşit olduğu
kayıtların listelenmesi
*/

db.getCollection(collectionName).find{
    $and:[{
        limit:{$gte:10000},
        products:{ $in:["InvestmentStock","Derivatives"]}
    }]


}