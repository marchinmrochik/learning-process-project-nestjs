import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewModel } from './review.model/review.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  controllers: [ReviewController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ReviewModel,
        schemaOptions: {
          collection: 'Auth',
        },
      },
    ]),
  ],
})
export class ReviewModule {}
