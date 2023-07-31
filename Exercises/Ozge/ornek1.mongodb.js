use('taksiapp');

db.getCollection('ozge').findOne();


//veri = {
  //  'plaka_sorumlusu' : "İhsan Anar",
  //  'sorumlu_telefon':"İhsan Oktay",
  //  'plaka':"34xx34",
  //  'bolge':NumberInt("34"),
  //  'km_ucreti':35,
  //  'toplam_km':50,
  //  'memnuniyet_skoru':70,
  //  'yorumlar':["İyi","Kötü"],
  //  'baslangıc_tarihi': new Date(),
  //  }


dokuman1 = {
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

dokuman2 = {
    'plaka_sorumlusu' : "İhsan Ali",
    'sorumlu_telefon':"İhsan Varol",
    'plaka':"35xx35",
    'bolge':NumberInt("35"),
    'km_ucreti':33,
    'toplam_km':75,
    'memnuniyet_skoru':85,
    'yorumlar':["İyi","Orta"],
    'baslangıc_tarihi': new Date(),
    }

//db.getCollection('ozge').insertOne(veri);

dokumanlar = [dokuman1, dokuman2]
db.getCollection('ozge').insertMany(dokumanlar);

//db.getCollection('ozge').insertMany(dokumanlar, {ordered:false});
