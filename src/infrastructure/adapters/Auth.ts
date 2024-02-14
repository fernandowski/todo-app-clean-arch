import jwt from 'jsonwebtoken';
import {IJWT} from "../../application/interfaces/adapters/IJWT";

export class Auth implements IJWT{
    constructor(private readonly secret: string = 'secret') {}
    generate(payload: string): Promise<string> {
        return  jwt.sign(payload, this.secret);
    }

    async verify(token: string): Promise<string | null> {
        try {
            return jwt.verify(token, this.secret) as string;
        } catch (error) {
            return null;
        }
    }
}
