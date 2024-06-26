/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRelation, Merge } from "../core/ModelUtils"

/**
 * The details to update of the gift card.
 */
export interface AdminPostGiftCardsGiftCardReq {
  /**
   * The value (excluding VAT) that the Gift Card should represent.
   */
  balance?: number
  /**
   * Whether the Gift Card is disabled on creation. If set to `true`, the gift card will not be available for customers.
   */
  is_disabled?: boolean
  /**
   * The date and time at which the Gift Card should no longer be available.
   */
  ends_at?: string
  /**
   * The ID of the Region in which the Gift Card can be used.
   */
  region_id?: string
  /**
   * An optional set of key-value pairs to hold additional information.
   */
  metadata?: Record<string, any>
}
