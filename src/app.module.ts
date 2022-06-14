import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubstitutesModule } from './substituties/substitutesModule';

@Module({
  imports: [SubstitutesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
