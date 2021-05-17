import { Country } from './country.entity';
import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => User, (user) => user.role, {})
  users: User[];

  @ManyToOne(() => Country, (country) => country.cities, {
    orphanedRowAction: 'delete',
    nullable: false,
  })
  country: Country;
}
