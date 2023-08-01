databaseName = "sample_supplies"
collectionName = "sales" 

use(databaseName);



db.getCollection(collectionName).find({});

db.getCollection(collectionName).find({
   $and:[
   {storeLocation:{$in:["Denver","London"]}},
   {items:{
        $elemMatch:{
            name:"binder",
            price:{$gt:10,$lt:30},
            tags:{$size:3}
        }
    }}
   ]
});

/* 

databaseName = "sample_supplies"
collectionName = "sales"

yukarıdaki koleksiyon ve database içerisinde yer alan dökümanlar üzerinde storeLocation alanının 
Denver ya da London olduğu satışlarda 
items alanı içerisinde name başlığının  binder olduğu 
items alanı içerisinde price başlığının 10 dan büyük 30 dan küçük olduğu 
items alanı içerisinde tags başlığının büyüklüğünün 3 e eşit olduğu kayıtları listeleyiniz

*/