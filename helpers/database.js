import { MongoClient } from 'mongodb'
import { ObjectId } from 'mongodb'

export const getDbConnectionString = () => {
  return `mongodb+srv://${process.env.dbUsername}:${process.env.dbPassword}@${process.env.dbCluster}.qvebhze.mongodb.net/${process.env.dbDatabase}?retryWrites=true&w=majority`
}

export const dbConnect = async () => {
  const client = await MongoClient.connect(getDbConnectionString())
  return client
}

export const findById = async (collection, id) => {
  const data = await collection.findOne({ _id: new ObjectId(id) })
  return data
}

export const deleteById = async (collection, id) => {
  const data = await collection.deleteOne({ _id: new ObjectId(id) })
  return data
}

export const updateById = async (collection, id, body) => {
  const data = await collection.replaceOne(
    { _id: new ObjectId(id) },
    { ...body }
  )
  return data
}
