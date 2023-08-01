
use('kutuphane')


db.getCollection("kitaplar").find({"categories":"Mobile"},{_id:0,"isbn":1,"categories":1})