export interface IAbstractBaseEntity {
  /**
   * Unique ID/PK
   */
  id: string;

  /**
   * Created timestamp
   */
  createdAt: Date;

  /**
   * Updated timestamp
   */
  updatedAt: Date;
}
