import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { SubstituteService } from './substitute/substitute.service';
import { SubstituteController } from './substitute/substitute.controller';
import { SubstituteModule } from './substitute/substitute.module';

@Module({
  imports: [CategoryModule, ProductModule, SubstituteModule],
  controllers: [AppController, SubstituteController],
  providers: [AppService, SubstituteService],
})
export class AppModule {}
