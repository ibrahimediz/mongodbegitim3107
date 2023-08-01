use('sample_airbnb')

db.getCollection("listingsAndReviews").find({
    $and:[{
        image:{$exists:false},
        minumum_nights:{$eq:"2"},
    }]
})