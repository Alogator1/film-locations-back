import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Film } from './film.entity';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => Film, (film) => film.genre, {})
  films: Film[];
}
