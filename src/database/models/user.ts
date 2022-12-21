import { Model } from "objection";

export class User extends Model {
    public static get tableName () {
      return 'users'
    }
}