import { User } from '../models/user'
import { BaseRepository } from '../repositories/base'
import { Page, QueryBuilder, QueryBuilderYieldingOneOrNone, Transaction } from 'objection'

export class UserRepository extends BaseRepository<User> {
  public constructor(transaction?: Transaction) {
    super(User, transaction)
  }

  public findUserById(userId: number): QueryBuilderYieldingOneOrNone<User> {
    return this.findById(userId)
  }

  public findAllUsers(): QueryBuilder<User, Page<User>, Page<User>> {
    return this.findAll().page(0, 10)
  }
}

export const userRepository = new UserRepository()