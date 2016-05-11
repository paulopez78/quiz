const MONGODB_PORT = process.env.MONGODB_PORT || "27017"
const MONGODB_HOST = process.env.MONGODB_HOST || "localhost"

export const DB_CONNECTION = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/quiz`
