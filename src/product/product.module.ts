import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProductModel } from './product.model/product.model';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ProductModel,
        schemaOptions: {
          collection: 'Auth',
        },
      },
    ]),
  ],
  providers: [ProductService],
})
export class ProductModule {}
