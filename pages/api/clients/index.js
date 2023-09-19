import { dbConnect } from '@/helpers/database'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name } = req.body

    const client = await dbConnect()
    const db = client.db()

    await db.collection('clients').insertOne({
      name,
    })

    res.status(201).json({ message: 'Client Created' })
    client.close()
    return
  }

  if (req.method === 'GET') {
    const client = await dbConnect()
    const db = client.db()

    const cursor = db.collection('clients').find()
    let doc
    const data = []

    while ((doc = await cursor.next())) {
      data.push(doc)
    }

    res.status(200).json({ data })
    client.close()
    return
  }
}

export default handler
