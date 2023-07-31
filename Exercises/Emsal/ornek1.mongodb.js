
use('ems_tsmclk');

/*veri = {
    'ems' : null,
    'spcl' : 40.98,
    'page' :  NumberDecimal('123'),
    'cdv' : 'Babı esrar..'
}

db.ems_tsmclk.insertOne(veri)
*/
db.getCollection('ems_tsmclk').findOne();




//db.kitap.findOne();
//db.kitap.getName();
//db.kitap.count();
//console.log(db.kitap.getName(), db.kitap.count());
//db.getCollection('kitap').find().count()
//db.getCollection('kitap').count()