import { Location } from './location.entity';
import { Comment } from './comment.entity';
import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  photo: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, (role) => role.users, {
    orphanedRowAction: 'delete',
    nullable: false,
  })
  role: Role;

  @OneToMany(() => Comment, (comment) => comment.user, {})
  comments: Comment[];

  @OneToMany(() => Location, (location) => location.user, {})
  locations: Location[];
}
