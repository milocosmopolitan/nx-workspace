import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Interaction {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'jsonb', nullable: true })
  data: string;

  @Column('date')
  expiresAt: string;

  @Column('date')
  consumedAt: string;
}