import { ObjectId } from 'mongodb'

import { dbConnect } from '../../../helpers/database'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const client = await dbConnect()
    const db = client.db()

    console.log('####', req.body)

    await db.collection('invoices').insertOne({
      ...req.body,
      clientId: new ObjectId(req.body.clientId),
    })

    // This 500ms delay is to alow mongodb autoincrement trigger to update
    // invoiceNumber in the database
    setTimeout(() => res.status(201).json({ message: 'Invoice Created' }), 500)

    client.close()
    return
  }

  if (req.method === 'GET') {
    const client = await dbConnect()
    const db = client.db()

    const cursor = db.collection('invoices').aggregate([
      {
        $lookup: {
          from: 'clients',
          localField: 'clientId',
          foreignField: '_id',
          as: 'client',
        },
      },
    ])

    let doc
    const data = []

    while ((doc = await cursor.next())) {
      data.push({
        ...doc,
        client: doc.client[0],
      })
    }

    res.status(200).json({ data })
    client.close()
    return
  }
}

export default handler
