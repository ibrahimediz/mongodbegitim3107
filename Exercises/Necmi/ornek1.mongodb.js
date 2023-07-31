use('taksiapp')

veri1 = {
    'id':1000,
    'plaka':"34GS0001",
    'km_fiyat':10,
    'lokasyon':'Taksim',
    'sofor':{
        "isim":"Ahmet",
        "soyisim":"Yılmaz"
    },
}
veri2 = {
    'id':2000,
    'plaka':"34GS0002",
    'km_fiyat':10,
    'lokasyon':'Pendik',
    'sofor':{
        "isim":"Ahmet",
        "soyisim":"Yıldız"
    },
}

//db.getCollection('necmi').insertOne(veri)
veriler = [veri1,veri2]

db.getCollection('necmi').insertMany(veriler)


db.getCollection('necmi').find()