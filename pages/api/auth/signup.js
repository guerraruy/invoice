import { passwordHash } from '@/helpers/auth'
import { dbConnect } from '@/helpers/database'
import { isValidEmail } from '@/helpers/validators'

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return
  }
  const { email, password } = req.body

  if (!isValidEmail(email)) {
    res.status(422).json({ message: 'Invalid email' })
    return
  }
  if (password?.length < 6) {
    res
      .status(422)
      .json({ message: 'Password must have at least 6 characters' })
    return
  }

  const client = await dbConnect()
  const db = client.db()

  // Check if email already exists in the database
  // console.log('email', { email })
  const existingUser = await db.collection('users').findOne({ email })
  // console.log('existingUser', existingUser)
  if (existingUser) {
    // sends unprocessable entity status
    res
      .status(422)
      .json({ message: 'Provided email already exists in the database' })
    client.close()
    return
  }

  const hash = await passwordHash(password)
  await db.collection('users').insertOne({
    email,
    password: hash,
  })

  res.status(201).json({ message: 'User Created' })
  client.close()
}

export default handler
