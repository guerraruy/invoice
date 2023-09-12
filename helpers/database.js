import { MongoClient } from 'mongodb'
import { ObjectId } from 'mongodb'

export const dbConnect = async () => {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DBCS)
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
