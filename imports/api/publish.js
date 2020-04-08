Meteor.publish('get', function(collection, query) {
    return DB[collection].find(query)
})