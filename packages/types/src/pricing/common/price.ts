import { BaseFilterable } from "../../dal"
import { PriceListDTO } from "./price-list"
import { PriceRuleDTO } from "./price-rule"
import { PriceSetDTO } from "./price-set"

/**
 * @interface
 *
 * A price's data.
 */
export interface PriceDTO {
  /**
   * The ID of a price.
   */
  id: string
  /**
   * The title of the price.
   */
  title?: string
  /**
   * The currency code of this price.
   */
  currency_code?: string
  /**
   * The price of this price.
   */
  amount?: number
  /**
   * The minimum quantity required to be purchased for this price to be applied.
   */
  min_quantity?: number
  /**
   * The maximum quantity required to be purchased for this price to be applied.
   */
  max_quantity?: number
  /**
   * The price set associated with the price.
   *
   * @expandable
   */
  price_set?: PriceSetDTO
  /**
   * The price list associated with the price.
   *
   * @expandable
   */
  price_list?: PriceListDTO
  /**
   * The ID of the associated price set.
   */
  price_set_id?: string
  /**
   * The price rules associated with the price.
   *
   * @expandable
   */
  price_rules?: PriceRuleDTO[]
  /**
   * When the price was created.
   */
  created_at: Date
  /**
   * When the price was updated.
   */
  updated_at: Date
  /**
   * When the price was deleted.
   */
  deleted_at: null | Date
}

export interface UpdatePriceDTO {
  id: string
  title?: string
  price_set?: PriceSetDTO
  /**
   * The code of the currency to associate with the price.
   */
  currency_code?: string | null
  /**
   * The amount of this price.
   */
  amount?: number
  /**
   * The minimum quantity required to be purchased for this price to be applied.
   */
  min_quantity?: number
  /**
   * The maximum quantity required to be purchased for this price to be applied.
   */
  max_quantity?: number
}

export interface CreatePriceDTO {
  title?: string
  price_set?: PriceSetDTO | string
  price_set_id: string
  price_list?: PriceListDTO | string
  rules_count?: number
  /**
   * The currency code of this price.
   */
  currency_code: string
  /**
   * The amount of this price.
   */
  amount: number
  /**
   * The minimum quantity required to be purchased for this price to be applied.
   */
  min_quantity?: number | null
  /**
   * The maximum quantity required to be purchased for this price to be applied.
   */
  max_quantity?: number | null
}

/**
 * @interface
 *
 * Filters to apply on prices.
 */
export interface FilterablePriceProps
  extends BaseFilterable<FilterablePriceProps> {
  /**
   * The IDs to filter the prices by.
   */
  id?: string[]
  /**
   * Currency codes to filter price by.
   */
  currency_code?: string | string[]
  /**
   * The IDs to filter the price's associated price set.
   */
  price_set_id?: string[]
  /**
   * The IDs to filter the price's associated price list.
   */
  price_list_id?: string[]
}
