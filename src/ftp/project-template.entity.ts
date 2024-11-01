import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProjectTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  project_id: string;

  @Column()
  file_id: string;

  @Column()
  file_type: string;

  @Column()
  temp_key: string

  @Column()
  temp_val: string

}