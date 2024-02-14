import {IRegistrationUserRepository} from "../interfaces/repository/IRegistrationUserRepository";
import {ICryptography} from "../interfaces/adapters/ICryptography";
import {RegistrationUser} from "../../domain/entities/RegistrationUser";

export class RegisterUser {
    constructor(private registrationUserRepository: IRegistrationUserRepository, private passwordHasher: ICryptography) {
    }

    async execute({ email, password }: RegistrationUser): Promise<void> {
        const existingUser = await this.registrationUserRepository.findUserOfEmail(email);

        if(existingUser) {
            throw new Error('Email Already Taken');
        }

        const hashedPassword = await this.passwordHasher.hash(password);
        this.registrationUserRepository.save({id: null, email, password: hashedPassword});
    }
}
