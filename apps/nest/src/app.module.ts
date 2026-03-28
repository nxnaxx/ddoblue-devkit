import { CustomConfigModule } from '@common/config/config.module';
import { HealthModule } from '@modules/health/health.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HealthModule, CustomConfigModule],
})
export class AppModule {}
