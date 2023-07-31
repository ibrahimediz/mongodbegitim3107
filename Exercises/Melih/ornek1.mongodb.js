use('kutuphane')
db.getCollection('kitap').findOne()


veri = {
    id : 1,
    'plate' : 'CSM',
    'price' : 10,
    'birthdate' : new Date(),
    'surucu' : {
        'isim' : 'Arı',
        'soyisim' : 'Maya'
    },    
    'ratings' : [{
        'id' : 2,
        'name' : 'Aya',
        'comment' : 'Yorgi',
        'rank' : 5
    }],
}