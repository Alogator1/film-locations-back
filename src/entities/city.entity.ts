import { Location } from './location.entity';
import { Country } from './country.entity';
import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
@Entity()
export class City {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => Location, (location) => location.city, {})
  locations: Location[];

  @ManyToOne(() => Country, (country) => country.cities, {
    orphanedRowAction: 'delete',
    nullable: false,
  })
  country: Country;
}
