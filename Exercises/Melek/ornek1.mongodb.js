use('taksiapp');
//db.getCollection('melek').findOne();

/*veri = {
    'plaka':'34XX3434',
    'arac_sahibi':{'isim':'Melek','soyisim': 'Özdemir'},
    'price':50

};*/

//db.getCollection('melek').insertOne(veri);

db.getCollection('melek').findOne({_id:0});