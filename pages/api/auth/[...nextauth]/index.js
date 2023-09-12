import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { dbConnect } from '../../../../helpers/database'
import { doesPasswordMatches } from '../../../../helpers/auth'

const config = {
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const client = await dbConnect()
        const db = client.db()

        const user = await db
          .collection('users')
          .findOne({ email: credentials.email })
        if (!user) {
          client.close()
          throw new Error('Invalid Credentials')
        }

        const valid = await doesPasswordMatches(
          credentials.password,
          user.password
        )

        if (!valid) {
          client.close()
          throw new Error('Invalid Credentials')
        }

        return {
          email: user.email,
        }
      },
    }),
  ],
}

export default NextAuth(config)
