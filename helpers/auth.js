import { hash, compare } from 'bcryptjs'

export const passwordHash = async (password) => {
  return await hash(password, 10)
}

export const doesPasswordMatches = async (password, passwordHash) => {
  return await compare(password, passwordHash)
}

export const isAuthenticate = (status) => {
  return status === 'authenticated'
}

export const isLoading = (status) => {
  return status === 'loading'
}
