import { Comment } from './../../entities/comment.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateParams, GetParams } from './comment.validators';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async findAll(options: GetParams): Promise<Comment[]> {
    return await this.commentRepository.find({
      where: options,
      relations: ['location', 'user'],
    });
  }

  async saveComment(
    options: CreateParams | CreateParams[],
  ): Promise<Comment | Comment[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line prettier/prettier
    return await this.commentRepository.save(options, { relations: ['location', 'user'],});
  }
}
