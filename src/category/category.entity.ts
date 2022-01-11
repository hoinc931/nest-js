import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ length: 250 })
  description: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @OneToOne(() => CategoryEntity)
  category_id: number;
}
