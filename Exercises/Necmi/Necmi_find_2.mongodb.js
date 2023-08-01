
use('kutuphane')


db.getCollection("kitaplar").find({"categories":"mobile"},{_id:0,"orderFromSun":0})