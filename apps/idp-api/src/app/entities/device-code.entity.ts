import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DeviceCode {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  grantId: string;

  @Column()
  userCode: string;

  @Column({ type: 'jsonb', nullable: true })
  data: string;

  @Column('date')
  expiresAt: string;

  @Column('date')
  consumedAt: string;
}
