use('sample_guides');

//db.getCollection('planets').findOne();

db.getCollection('planets').findOne({_id:0},orderFromSun);