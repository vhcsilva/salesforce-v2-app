import { createContext } from 'react'
import { User } from '../types/global'

const AuthContext = createContext({} as User)

export default AuthContext
