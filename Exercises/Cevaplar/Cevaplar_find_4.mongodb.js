/* sample_guides veritabanındaki planets koleksiyonu içerisinde yer alan 
mainAtmosphere başlığının bir dizi olduğu bilinmektedir.
bu dizinin uzunluğu 3 olan kayıtları listeleyelim
*/

use('sample_guides')

db.getCollection("planets").find(
    {
        mainAtmosphere:{$type:"array",$size:3}
    }
);