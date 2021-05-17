import { User } from './user.entity';
import { Location } from './location.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @ManyToOne(() => Location, (location) => location.comments, {
    orphanedRowAction: 'delete',
    nullable: false,
  })
  location: Location;

  @ManyToOne(() => User, (user) => user.comments, {
    orphanedRowAction: 'delete',
    nullable: false,
  })
  user: User;

  @Column()
  text: string;

  @Column()
  date: string;
}
