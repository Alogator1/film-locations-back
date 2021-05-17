import { User } from './user.entity';
import { Film } from './film.entity';
import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Comment } from './comment.entity';
import { Photo } from './photo.entity';

@Entity()
export class Location {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  director: string;

  @Column()
  actors: string;

  @ManyToOne(() => Film, (film) => film.locations, {
    orphanedRowAction: 'delete',
    nullable: false,
  })
  film: Film;

  @ManyToOne(() => User, (user) => user.locations, {
    orphanedRowAction: 'delete',
    nullable: false,
  })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.location, {})
  comments: Comment[];

  @OneToMany(() => Photo, (photo) => photo.location, {})
  photos: Photo[];
}
