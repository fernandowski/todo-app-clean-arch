import {User} from "../../../domain/entities/RegistrationUser";

export interface IRegistrationUserRepository {
    save(registrationUser: User): void,
    findUserOfEmail(email: string): Promise<User> |  null
}
