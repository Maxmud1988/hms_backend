import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";


@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly configServices: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configServices.get('secret_jwt')

        });
    }

    async validate(payload: any) {
        return { ...payload.user }
    }
} 