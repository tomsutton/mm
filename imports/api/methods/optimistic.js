// Meteor methods loaded to the client and server

Meteor.methods({
    mongoInsert(db, document) {
        return DB[db].insert(document)
    },
    mongoUpdate(db, query, update, options) {
        DB[db].update(query, {
            $set: update
        }, (options || {}), function (e) {
            e && console.log(e)
        })
    },
    mongoPush(db, query, update, options) {
        DB[db].update(query, {
            $push: update
        }, (options || {}), function (e) {
            e && console.log(e)
        })
    },
    mongoPull(db, query, update, options) {
        DB[db].update(query, {
            $pull: update
        }, (options || {}), function (e) {
            e && console.log(e)
        })
    },
    mongoUnset(db, query, unsetObj, options) {
        DB[db].update(query, {
            $unset: unsetObj

        }, (options || {}), function (e) {
            e && console.log(e)
        })
    },
    mongoRemove(DBName, query, options) {
        DB[DBName].remove(query)
    }
})
