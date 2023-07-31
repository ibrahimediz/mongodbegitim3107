use('taksiapp')

veri = {
    'id':1000,
    'plaka':"34GS0001",
    'km_fiyat':10,
    'lokasyon':'Taksim',
    'sofor':{
        "isim":"Ahmet",
        "soyisim":"Yılmaz"
    },
}
db.getCollection('necmi').insertOne(veri)

db.getCollection('necmi').findOne()