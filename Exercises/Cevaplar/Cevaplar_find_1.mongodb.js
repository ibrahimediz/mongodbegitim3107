/* 
sample_guides içindeki planets koleksiyonundan ilk satırı _id  ve orderFromSun başlıkları 
olmadan getiriniz
*/ 

use("sample_guides");

db.getCollection("planets").findOne({},{_id:0,"orderFromSun":0})