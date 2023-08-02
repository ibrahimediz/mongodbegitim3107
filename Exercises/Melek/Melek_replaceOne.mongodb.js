use('kutuphane');

dokuman1 = {
    _id :2,
    'isbn':null,
    'best_seller':true,
    'fiyat':50.25,
    'sayfa': NumberInt("168"),
    'baslik':'Puslu Kıtalar Atlası',
    'baski_tarihi': new Date(),
    'pattern': /\d+/,
    'satin_alan':["Ali",3,"İsmail",5],
    'yazar':{
        "isim":"İhsan Oktay",
        "soyisim":"Anar"
    },
}




// db.getCollection('kitap').insertOne(veri)