import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  uid: string;

  @Column({ type: 'jsonb', nullable: true })
  data: string;

  @Column('date')
  expiresAt: string;

  @Column('date')
  consumedAt: string;
}