import { api } from '../../api.instance'
import type { LoginDto } from '../dto/login.dto'

class AuthApi {
  async login(userDto: LoginDto) {
    return api.post('/login', userDto)
  }
  async me() {}
}

export const authApi = new AuthApi()
