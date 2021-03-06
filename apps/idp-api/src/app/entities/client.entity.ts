import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'jsonb', nullable: true })
  data: string;

  @Column('date')
  expiresAt: string;

  @Column('date')
  consumedAt: string;
}