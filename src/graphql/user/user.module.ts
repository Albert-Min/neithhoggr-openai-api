import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { JwtStrategy } from '../../auth/jwt.strategy';
import { JWT_SECRET, JWT_TOKEN_EXPIRES_IN } from '../../environment';
import { User, UserSchema } from './user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: JWT_TOKEN_EXPIRES_IN },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserResolver, UserService, JwtStrategy],
})
export class UserGQLModule {}
