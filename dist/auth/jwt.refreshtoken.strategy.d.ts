import { Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';
declare const JwtRefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshTokenStrategy extends JwtRefreshTokenStrategy_base {
    private userService;
    constructor(userService: UsersService);
    validate(req: any, payload: any): Promise<{
        userId: any;
        username: any;
    }>;
}
export {};
