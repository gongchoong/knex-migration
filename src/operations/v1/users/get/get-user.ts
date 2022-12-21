import { Operation } from "../../../operation"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require('../../../../database/init');

interface GetUserOperationInput {
    userId: number
    deviceId: string
}

interface GetUserOperationOutPut {
    result: string
}

class GetUser extends Operation<GetUserOperationInput, GetUserOperationOutPut> {
    protected async run(inputData: GetUserOperationInput): Promise<GetUserOperationOutPut> {
        console.log(inputData.userId)
        console.log(inputData.deviceId)

        //const res = await client.query('SELECT * FROM users');
        // const res = await User.query();
        const result = await db.select().from('users').then(function(result) {
            console.log(result);
            return result;
        });
        return {
            result: result
        }
    }
}

export const getUser = new GetUser()