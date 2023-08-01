databaseName = "sample_analytics"
collectionName = "accounts" 

use(databaseName);

/* sample_analytics veritabanında 
accounts koleksiyonu içerisinde yer alan veriler üzerinden
limit 10000 den büyük VE p
roducts alanında InvestmentStock,Derivatives ifadelerini barındıran verilerin listelenmesi
*/

db.getCollection(collectionName).find({
    $and:[{
        limit:{$gte:10000},
        products:{ $in:["InvestmentStock","Derivatives"]}
    }]
});