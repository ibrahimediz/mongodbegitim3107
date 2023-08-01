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

databaseName = "sample_airbnb"
collectionName = "listingsAndReviews"

use(databaseName);

db.getCollection(collectionName).find(
    {
        $nin:[{images}]
    }
);

