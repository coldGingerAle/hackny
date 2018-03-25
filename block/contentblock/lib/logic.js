'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {test.Rating } rating
 * @transaction
 */

function Rating(Rating) {
    Rating.to.author.peopleRated += 1;
    Rating.to.rated +=  rating.RatingAmount ;


    return getAssetRegistry('test.Rating')
        .then (function (rating) {
            return assetRegistry.update(rating.from);
        })
        .then (function () {
            return getAssetRegistry('test.Rating');
        })
        .then(function (rating) {
            return assetRegistry.update(rating.to);
        });
}
