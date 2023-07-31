use('kutuphane');

db.getCollection('kitap').findOne();


veri = {
    id : 1,
    'plaka' : '34MZ20',    
    'ucret' : 50.25,  
    'tarih' : new Date(),  
    'surucu' : {
        'isim' : 'Ali',
        'soyisim' : 'Ak'
    },
    'yolcu' : {
        'isim' : 'Ayşe',
        'soyisim' : 'Kara'
    },
    'ratings' : [{
        'comment' : 'xyz',
        'rank' : 5
    }],
}