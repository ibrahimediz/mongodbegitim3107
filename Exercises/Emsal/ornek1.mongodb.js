
use('kutuphane');

db.getCollection('kitap').findOne();

veri = {
    'ems' : null,
    'spcl' : 40.98,
    'page' :  NumberDecimal('123'),
    'cdv' : 'Babı esrar..'
}

db.kitap.insertOne(veri)


//db.kitap.findOne();
//db.kitap.getName();
//db.kitap.count();
//console.log(db.kitap.getName(), db.kitap.count());
//db.getCollection('kitap').find().count()
//db.getCollection('kitap').count()