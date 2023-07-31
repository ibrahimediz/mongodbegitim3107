use('kutuphane');

db.getCollection('kitap').findOne();


veri = {
    'isbn' : null,
    'best_seller' : true,
    'price' : 150.25,
    'pages' : NumberInt(167),
    'baski_tarihi' : new Date(),
    'pattern' : /\d+/,
    'satin_alan' : ["Ali", "Veli"],
    'yazar' : {
        'isim' : 'Ihsan Oktay',
        'soyisim' : 'Anar'
    }
}