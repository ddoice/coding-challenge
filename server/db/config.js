if (!process.env.MONGO_SERVER) {
    console.error('No Mongo server configured, please configure a valid server using the .env file')
    process.exit(1);
}

if (!process.env.MONGO_COLLECTION) {
    console.error('No Mongo collection configured, please configure a valid collection using the .env file')
    process.exit(1);
}

module.exports = `mongodb://${process.env.MONGO_SERVER}/${process.env.MONGO_COLLECTION}?authSource=admin`;