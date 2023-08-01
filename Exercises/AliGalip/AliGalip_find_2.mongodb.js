databaseName = "kutuphane"
collectionName = "kitaplar"

use(databaseName);

db.getCollection("urunler").find({price:{$lt:899}},{name:1,price:1})