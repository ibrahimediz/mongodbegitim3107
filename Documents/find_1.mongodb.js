/*
-----------------------------------------
db.getCollection("colName").findOne(query,projection)
-----------------------------------------
*/
use("sample_training");
//------------------------ findOne # ilk kayıt
// db.getCollection("inspections").findOne();
/* 
{
  "_id": {
    "$oid": "56d61033a378eccde8a8354f"
  },
  "id": "10021-2015-ENFO",
  "certificate_number": 9278806,
  "business_name": "ATLIXCO DELI GROCERY INC.",
  "date": "Feb 20 2015",
  "result": "No Violation Issued",
  "sector": "Cigarette Retail Dealer - 127",
  "address": {
    "city": "RIDGEWOOD",
    "zip": 11385,
    "street": "MENAHAN ST",
    "number": 1712
  }
}
*/

// db.getCollection("inspections").findOne({_id:ObjectId("56d61033a378eccde8a8354f")});
/*

{
  "_id": {
    "$oid": "56d61033a378eccde8a8354f"
  },
  "id": "10021-2015-ENFO",
  "certificate_number": 9278806,
  "business_name": "ATLIXCO DELI GROCERY INC.",
  "date": "Feb 20 2015",
  "result": "No Violation Issued",
  "sector": "Cigarette Retail Dealer - 127",
  "address": {
    "city": "RIDGEWOOD",
    "zip": 11385,
    "street": "MENAHAN ST",
    "number": 1712
  }
}
*/
// db.getCollection("inspections").findOne({"certificate_number":9287088},{"adress":1});
/*
{
  "_id": {
    "$oid": "56d61033a378eccde8a83557"
  },
  "address": {
    "city": "NEW YORK",
    "zip": 10030,
    "street": "FREDRCK D BLVD",
    "number": 2655
  }
}
*/
// db.getCollection("inspections").findOne({"certificate_number":9287088},{_id:0,"address":1});
/*
{
  "address": {
    "city": "NEW YORK",
    "zip": 10030,
    "street": "FREDRCK D BLVD",
    "number": 2655
  }
}
*/
// db.getCollection("inspections").findOne({"certificate_number":9287088},{"address":1,"business_name":0}) 
// hata verir

// find
/* arguments 
    $eq
    $gt $gte
    $lt $lte
    $and $or
    $elemMatch
*/
// projections
