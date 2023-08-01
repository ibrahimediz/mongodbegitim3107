use('sample_guides')

db.getCollection("planets").find(
    {
        mainAtmosphere:{$type:"array",$size:3}
    }
);