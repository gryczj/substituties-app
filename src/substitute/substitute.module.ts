import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Substitute } from './dto/substitute.entity';
import { SubstituteController } from './substitute.controller';
import { SubstituteService } from './substitute.service';

@Module({
  imports: [TypeOrmModule.forFeature([Substitute])],
  controllers: [SubstituteController],
  providers: [SubstituteService],
})
export class SubstituteModule {}
