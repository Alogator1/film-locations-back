import { Comment } from './../../entities/comment.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GetParams, CreateParams } from './comment.validators';
import { CommentService } from './comment.service';
import { DeleteResult } from 'typeorm';

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

  @Delete(':userId')
  async deleteComment(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<DeleteResult> {
    return await this.commentService.deleteComment(userId);
  }

  @Post()
  async saveComment(
    @Body() options: CreateParams | CreateParams[],
  ): Promise<Comment | Comment[]> {
    return await this.commentService.saveComment(options);
  }
}
