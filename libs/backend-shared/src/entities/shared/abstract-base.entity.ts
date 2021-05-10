import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { IAbstractBaseEntity } from '@rdd/common-utils';

/**
 * Base for all other entities
 */
export abstract class AbstractBaseEntity
  extends BaseEntity
  implements IAbstractBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
