/* global use, db */

use('taksiapp');

veri = {
    'plaka':'35 ECE 35',
    'yıl': NumberInt("2023"),
    'model':'Passat',
    'renk': 'Mavi',
    'şoför':{
        "isim":"Hilal",
        "soyisim":"Elmas"
    },
    'sahip':{
        "isim":"Nehir",
        "soyisim":"Elmas"
    },
    'baslangic_fiyati':50.25,
    'km_fiyatı':30  
};


db.getCollection('hilal').insertOne(veri);

db.getCollection('hilal').findOne();