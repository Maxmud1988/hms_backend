import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { TokenModule } from '../token/token.module';
import { jwtStrategy } from '../../strategy';

@Module({
  imports: [UserModule, TokenModule],
  controllers: [AuthController],
  providers: [AuthService, jwtStrategy]
})
export class AuthModule { }
