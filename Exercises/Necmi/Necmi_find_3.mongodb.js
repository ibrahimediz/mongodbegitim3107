use('sample_airbnb')

db.getCollection("listingsAndReviews").find(
    {
        summary:{$type:"string"}
    }
);