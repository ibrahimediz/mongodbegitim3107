use('taksiapp');


veri = {
'model': null,
'plaka': '34abc34',
'sofor': {
    'isim': 'abc',
    'soyisim': 'abc'
},
'yolcu': {
    'isim': 'abc',
    'soyisim': 'abc'
},
'binis_ilce': 'Kurtkoy',
'inis_ilce': 'Maltepe',
'ucret': 120,
'rate': 5,
'yorum': null,
'tarih': new Date

}

db.getCollection('suat').findOne();

//db.getCollection('suat').insertOne(veri);