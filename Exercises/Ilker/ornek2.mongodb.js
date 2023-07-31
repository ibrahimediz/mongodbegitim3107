use("sample_guides");
//------------------------ findOne # ilk kayıt

/* 
sample_guides içindeki planets koleksiyonundan ilk satırı _id  ve orderFromSun başlıkları 
olmadan getiriniz
*/ 
 db.getCollection("planets").findOne({},{_id:0,"orderFromSun":0});

 
