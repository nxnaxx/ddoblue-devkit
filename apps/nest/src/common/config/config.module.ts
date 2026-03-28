import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import env from './env';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [env],
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'production' ? '.production.env' : '.development.env',
    }),
  ],
})
export class CustomConfigModule {}
