import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AuthorizationCode {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  grantId: string;

  @Column({ type: 'jsonb', nullable: true })
  data: string;

  @Column('date')
  expiresAt: string;

  @Column('date')
  consumedAt: string;
}