

// Initiate server and client side MongoDB collections
const collections = [
    {
        name: 'test',
        index: [
            { _id: 1 }
        ]
    },
]

// define DB object in Global scope
DB = Object.assign(
    {},
    ...collections.map(c => {
        if (Meteor.isClient && c.serverOnly) return {}
        if (Meteor.isServer && c.clientOnly) return {}
        if (c.name == 'users') return {}
        let idGeneration = 'STRING'
        console.log(c.name)
        return {
            [c.name]: new Mongo.Collection(c.name, { idGeneration: idGeneration }),
        }
    })
)

async function ensureCollectionIndexes() {
    if (!Meteor.isServer) {
        return
    }
    for (const collectionObj of collections) {
        if (!collectionObj.hasOwnProperty('index')) {
            continue
        }
        const meteorCollection = collectionObj.name === 'users' ? Meteor.users : DB[collectionObj.name];
        const collection = meteorCollection.rawCollection();
        try {
            const existingIndexes = await collection.indexes()
            for (const index of collectionObj.index) {
                const indexExists = existingIndexes.find((alreadyAvailableIndex) => index == alreadyAvailableIndex.key)
                if (indexExists) {
                    continue
                }
                await collection.createIndex(index);

            }
        }
        catch (err) {
            console.log(err)
        }
    }
}
ensureCollectionIndexes()
