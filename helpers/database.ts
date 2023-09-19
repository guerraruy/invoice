import { MongoClient, Collection } from 'mongodb'
import { ObjectId } from 'mongodb'

export const getDbConnectionString = () => {
  return `mongodb+srv://${process.env.dbUsername}:${process.env.dbPassword}@${process.env.dbCluster}.${process.env.dbServer}.mongodb.net/${process.env.dbDatabase}?retryWrites=true&w=majority`
}

export const dbConnect = async () => {
  const client = await MongoClient.connect(getDbConnectionString())
  return client
}

export const findById = async (collection: Collection, id: string) => {
  const data = await collection.findOne({ _id: new ObjectId(id) })
  return data
}

export const deleteById = async (collection: Collection, id: string) => {
  const data = await collection.deleteOne({ _id: new ObjectId(id) })
  return data
}

export const updateById = async (
  collection: Collection,
  id: string,
  body: Object
) => {
  const data = await collection.replaceOne(
    { _id: new ObjectId(id) },
    { ...body }
  )
  return data
}
