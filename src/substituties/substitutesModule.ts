import { Module } from '@nestjs/common';
import { SubstitutesService } from './substitutes.service';
import { SubstitutesController } from './substitutesController';

@Module({
  providers: [SubstitutesService],
  controllers: [SubstitutesController]
})
export class SubstitutesModule {}
