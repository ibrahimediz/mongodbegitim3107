use("sample_guides")

// findOne
//db.getCollection()
//db.getCollection("inspections").findOne()

//db.getCollection("inspections").findOne({_id:ObjectId("56d61033a378eccde8a8354f")})

//db.getCollection("inspections").findOne({"certificate_number":9287088},{"address":1})

//db.getCollection("inspections").findOne({"certificate_number":9287088},{_id:0, "address":1})
// id disinda degerlere hata verir
//db.getCollection("inspections").findOne({"certificate_number":9287088},{"address":1, "business_name":0})

db.getCollection("planets").findOne({},{_id:0, "orderFromSun":0})
