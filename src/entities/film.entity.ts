import { Location } from './location.entity';
import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Genre } from './genre.entity';
@Entity()
export class Film {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  director: string;

  @Column()
  actors: string;

  @ManyToOne(() => Genre, (genre) => genre.films, {
    orphanedRowAction: 'delete',
    nullable: false,
  })
  genre: Genre;

  @OneToMany(() => Location, (location) => location.film, {})
  locations: Location[];
}
