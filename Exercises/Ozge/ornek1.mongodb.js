use('taksiapp');

db.getCollection('ozge').findOne();



veri = {
    'plaka_sorumlusu' : "İhsan Anar",
    'sorumlu_telefon':"İhsan Oktay",
    'plaka':"34xx34",
    'bolge':NumberInt("34"),
    'km_ucreti':35,
    'toplam_km':50,
    'memnuniyet_skoru':70,
    'yorumlar':["İyi","Kötü"],
    'baslangıc_tarihi': new Date(),
    }

db.getCollection('ozge').insertOne(veri);