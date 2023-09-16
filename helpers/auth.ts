import { hash, compare } from 'bcryptjs'

export const passwordHash = async (password: string) => {
  return await hash(password, 10)
}

export const doesPasswordMatches = async (
  password: string,
  passwordHash: string
) => {
  return await compare(password, passwordHash)
}

export const isAuthenticate = (status: string) => {
  return status === 'authenticated'
}

export const isLoading = (status: string) => {
  return status === 'loading'
}
