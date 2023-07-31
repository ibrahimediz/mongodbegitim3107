use("sample_guides");

db.getCollection("planets").findOne();

db.getCollection("planets").find({},{_id:0,"orderFromSun":0});