import { Comment } from './../../entities/comment.entity';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CommentController],
  imports: [TypeOrmModule.forFeature([Comment])],
  providers: [CommentService],
})
export class CommentModule {}
