import { ObjectId } from 'mongodb'

import {
  dbConnect,
  deleteById,
  findById,
  updateById,
} from '../../../helpers/database'

const handler = async (req, res) => {
  const { id } = req.query

  if (req.method === 'GET') {
    const client = await dbConnect()
    const db = client.db()

    const data = await findById(db.collection('invoices'), id)

    res.status(200).json({ data })
    client.close()
    return
  }

  if (req.method === 'DELETE') {
    const client = await dbConnect()
    const db = client.db()

    const data = await deleteById(db.collection('invoices'), id)

    res.status(200).json({ data })
    client.close()
    return
  }

  if (req.method === 'PUT') {
    const client = await dbConnect()
    const db = client.db()

    const body = {
      ...req.body,
      clientId: new ObjectId(req.body.clientId),
    }

    const data = await updateById(db.collection('invoices'), id, body)

    res.status(200).json({ data })
    client.close()
    return
  }
}

export default handler
