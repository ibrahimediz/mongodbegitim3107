use('sample_airbnb')

db.getCollection("listingsAndReviews").find({
    $and:[{
        image:{$exists:false},
        minimum_nights:{$eq:"1"},
    }]
});