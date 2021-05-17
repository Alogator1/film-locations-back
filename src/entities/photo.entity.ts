import { Location } from './location.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @ManyToOne(() => Location, (location) => location.photos, {
    orphanedRowAction: 'delete',
    nullable: false,
  })
  location: Location;

  @Column()
  url: string;
}
