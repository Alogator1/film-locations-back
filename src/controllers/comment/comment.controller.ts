import { Comment } from './../../entities/comment.entity';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GetParams, CreateParams } from './comment.validators';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get()
  async getComments(@Body() options: GetParams): Promise<Comment[]> {
    return await this.commentService.findAll(options);
  }

  @Get('location/:locationId')
  async getCommentsForLocation(
    @Param('locationId', ParseIntPipe) locationId: number,
  ): Promise<Comment[]> {
    return await this.commentService.findAll({ location: locationId });
  }

  @Get('user/:userId')
  async getCommentsByUser(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<Comment[]> {
    return await this.commentService.findAll({ user: userId });
  }

  @Post()
  async saveComment(
    @Body() options: CreateParams | CreateParams[],
  ): Promise<Comment | Comment[]> {
    return await this.commentService.saveComment(options);
  }
}
