/*db.getCollection("urunler").find(
    {$and:[{price:899}, {color:{
        $in:["white", "black"]
    }}]}, {name:1, price:1, color:1}
);
*/


/**
 * db.getCollection(collectionName).find(
    {$and:[{
        limit:{$gte:10000},
        products: {
            $in: ["InvestmentStock", "Derivatives"]
        }
    }
    ]}
);
 */



/**
 * db.getCollection(collectionName).find(
    {$and:[{
        images:{$exists:true},
        minimum_nights:{$eq:"1"}
    }]}
    
);/ */

/*
db.getCollection(collectionName).find(
    {cancellation_policy:{$type:"string"}}
    
);*/
databaseName = "sample_guides"
collectionName = "planets"

use(databaseName);
db.getCollection(collectionName).find({
    mainAtmosphere : {$type: "array",$size:3}

});


