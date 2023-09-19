import { ObjectId } from 'mongodb'

import { dbConnect, updateById } from '@/helpers/database'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const client = await dbConnect()
    const db = client.db()

    // Get and update Invoice Sequence number
    let invoiceNumber = 1
    const cursor = db.collection('counters').find()
    const doc = await cursor.next()
    if (doc) {
      const { _id, seq_value } = doc
      invoiceNumber = seq_value + 1
      await updateById(db.collection('counters'), _id, {
        seq_value: invoiceNumber,
      })
    } else {
      // Initialize Invoice sequence in  database
      await db.collection('counters').insertOne({
        seq_value: 1,
      })
    }

    await db.collection('invoices').insertOne({
      ...req.body,
      clientId: new ObjectId(req.body.clientId),
      invoiceNumber,
    })

    res.status(201).json({ message: 'Invoice Created' })

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
