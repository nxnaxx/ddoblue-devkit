import { Injectable, Logger } from '@nestjs/common';

import { HealthResponseDto } from './dto/health.dto';

@Injectable()
export class HealthService {
  private readonly logger = new Logger('HealthService');

  getHealth(): HealthResponseDto {
    this.logger.log('health check');

    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
