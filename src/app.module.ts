import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { SubstituteModule } from './substitute/substitute.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'substitutes-app',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CategoryModule,
    ProductModule,
    SubstituteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
