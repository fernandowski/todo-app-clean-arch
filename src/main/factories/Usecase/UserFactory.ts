import {RegisterUser} from "../../../application/use-cases/RegisterUser";
import {PasswordHasher} from "../../../infrastructure/adapters/PasswordHasher";
import {IRegistrationUserRepository} from "../../../application/interfaces/repository/IRegistrationUserRepository";
import {UserSignOn} from "../../../application/use-cases/UserSignOn";
import {IJWT} from "../../../application/interfaces/adapters/IJWT";

export class UserFactory {
    public static composeRegisterUserUseCase(userRepository: IRegistrationUserRepository , passwordHasher: PasswordHasher) : RegisterUser {
        return new RegisterUser(userRepository, passwordHasher);
    }

    public static composeSignOnUserUseCase(
        userRepository: IRegistrationUserRepository,
        passwordHasher: PasswordHasher,
        jwt: IJWT
    ) : UserSignOn {
        return new UserSignOn(userRepository, passwordHasher, jwt);
    }
}
