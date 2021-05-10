import { AbstractBaseEntity } from '../shared/abstract-base.entity';
import { IProfile } from '@rdd/common-utils';
import { v4 } from 'uuid';
import { Entity, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';

/**
 * User Profile entity
 */
@Entity('profiles')
export class ProfileEntity extends AbstractBaseEntity implements IProfile {
  constructor(input?: { id?: string; email?: string; name?: string }) {
    super();
    if (input) {
      this.id = input.id ?? v4();
      this.email = input.email ?? 'Not set';
      this.name = input.name ?? 'Not set';
    } else {
      // #CLTODO: this is a temporary handler for invalid creation args
      this.id = v4();
      this.email = 'Not set';
      this.name = 'Not set';
    }
  }
  /**
   * Email address, from claim
   */
  @Column()
  email: string;
  /**
   * Name, from claim
   */
  @Column()
  name: string;
}
