import { needUsers } from "../../../helpers";
import { User } from "../../../../database/models/user";
import { userRepository } from "../../../../database/repositories/user";
import { Operation } from "../../../operation"

interface GetUserOperationInput {
    userId: number
    deviceId: string
}

class GetUser extends Operation<GetUserOperationInput, User[]> {
    protected async run(inputData: GetUserOperationInput): Promise<User[]> {
        console.log(inputData.userId)
        console.log(inputData.deviceId)
        const pagedUsers = await userRepository.findAllUsers();
        const users = needUsers(pagedUsers.results);
        
        return users
    }
}

export const getUser = new GetUser()