import { IAbstractBaseEntity } from '../shared/abstract-base';

/**
 * User profile definition.
 * ID corresponds to keycloak "sub"
 */
export interface IProfile extends IAbstractBaseEntity {
  /**
   * Email address, from claim
   */
  email: string;
  /**
   * Name, from claim
   */
  name: string;
}
