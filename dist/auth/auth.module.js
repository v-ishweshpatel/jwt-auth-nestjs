"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../users/user.schema");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../strategy/constants");
const users_service_1 = require("../users/users.service");
const hash_service_1 = require("../users/hash.service");
const local_strategy_1 = require("../strategy/local.strategy");
const auth_controller_1 = require("./auth.controller");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: user_schema_1.User.name,
                    schema: user_schema_1.UserSchema
                }]),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: {
                    expiresIn: '60d'
                },
            }),
        ],
        controllers: [auth_controller_1.default],
        providers: [auth_service_1.AuthService, users_service_1.UserService, local_strategy_1.LocalStrategy, hash_service_1.HashService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map