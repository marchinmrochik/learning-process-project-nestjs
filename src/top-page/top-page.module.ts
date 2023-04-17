import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { TopPageModel } from './top-page.model/top-page.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  controllers: [TopPageController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: TopPageModel,
        schemaOptions: {
          collection: 'Auth',
        },
      },
    ]),
  ],
})
export class TopPageModule {}
