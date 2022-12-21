import { Pojo } from "objection";
import { BaseModel } from "./base";

export class User extends BaseModel {
    public static get tableName () {
      return 'users'
    }

    public firstName: string;

    protected $transformJSON = {
      omit: [
        'deletedAt',
      ],
    };

    public toJSONOmit(): Pojo {
      const json = this.toJSON()
      return json
    }
}