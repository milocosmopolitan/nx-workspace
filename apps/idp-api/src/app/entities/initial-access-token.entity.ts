import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InitialAccessToken {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'jsonb', nullable: true })
  data: string;

  @Column('date')
  expiresAt: string;

  @Column('date')
  consumedAt: string;
}