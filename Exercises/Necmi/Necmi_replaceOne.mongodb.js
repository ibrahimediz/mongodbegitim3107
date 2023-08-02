/* kutuphane veritabanı içerisindeki dergi koleksiyonuna 
isim ve sayfa alanını kullanarak ekleme yapınız. Bu ekleme sırasında eklenecek olacak döküman için _id yi siz belirleyin
ardından replaceOne fonksiyonu ile yeni girmiş olduğunuz kaydı başka bir dökümanla yer değiştiriniz.
*/ 

databaseName = "kutuphane"
collectionName = "dergi" 
use(databaseName)

new_data = {
    "_id": 35,
    "isim": "dergi1",
    "sayfa": "35",
    "fiyat": "350"
  }

db.getCollection(collectionName).insertOne(new_data);


new_data2 = {
    "isim": "dergi2",
    "sayfa": "34",
    "fiyat": "340"
  };

db.getCollection(collectionName).replaceOne({_id:35},new_data2);


db.getCollection(collectionName).find();