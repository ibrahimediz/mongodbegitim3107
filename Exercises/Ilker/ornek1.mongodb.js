use('taksiapp');


data = {
    'renk':"siyah",
    'model':"hatchback",
    'eniste_arabasi': false,
    'koltuk_sayisi':4,
    'bagaj':true,
    'route_traffic_dens': "middle",
    'route_km': 24.2, 
}

db.getCollection('ilker').insertOne(data);
