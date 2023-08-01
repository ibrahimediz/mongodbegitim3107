databaseName = "sample_guides"
collectionName = "planets" 

use(databaseName);

/* sample_guides veritabanındaki planets koleksiyonu içerisinde yer alan 
mainAtmosphere başlığının bir dizi olduğu bilinmektedir.
bu dizinin uzunluğu 3 olan kayıtları listeleyelim
*/

db.getCollection(collectionName).find(
    {
        mainAtmosphere:{$type:"array",$size:3}
    }
)


