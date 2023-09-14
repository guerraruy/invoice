import { ObjectId } from 'mongodb'

import { dbConnect } from '../../../helpers/database'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // const { name } = req.body

    // if (!valid(email) || !valid(password)) {
    //   res.status(422).json({message: 'Invalid Input'})
    // }

    const client = await dbConnect()
    const db = client.db()

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

    // const cursor = db.collection('invoices').find()

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
      data.push(doc)
    }

    res.status(200).json({ data })
    client.close()
    return
  }
}

export default handler