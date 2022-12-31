import { User } from "../database/models/user"
import * as errors from '../utils/errors'


export const needUser = (user?: User, err = new errors.UserNotFoundError()): User => {
    if (!user) {
      throw err
    }
  
    return user
  }


export const needUsers = (user?: User[], err = new errors.UserNotFoundError()): User[] => {
    if (!user) {
      throw err
    }
  
    return user
  }