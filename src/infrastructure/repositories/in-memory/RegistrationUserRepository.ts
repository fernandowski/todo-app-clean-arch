import {v4 as uuidV4} from 'uuid';
import {IRegistrationUserRepository} from "../../../application/interfaces/repository/IRegistrationUserRepository";
import {RegistrationUser, User} from "../../../domain/entities/RegistrationUser";

class RegistrationUserRepository implements IRegistrationUserRepository {
    private registeredUsers = [];

    public async save(user: User): Promise<void> {
        this.registeredUsers.push({...user, id: uuidV4()});
    }

    public async findUserOfEmail(email: string): Promise<User | null> {
        const userCollection: User = this.registeredUsers.find((registeredUser: RegistrationUser) => registeredUser.email === email);
        return userCollection || null;
    }
}


export const registrationUserRepository = new RegistrationUserRepository();
