export const DISCOUNT_CONDITION_PERMANENT = 'permanent'
export const DISCOUNT_CONDITION_TOTAL = 'total'
export const DISCOUNT_CONDITION_QTY = 'qty'

export const DISCOUNT_TYPE_FIX = 'fix'
export const DISCOUNT_TYPE_PERCENT = 'percent'

export class Discount {
    constructor({type, condition, conditionAmount, value}) {
        this.type = type
        this.condition = condition
        this.conditionAmount = conditionAmount
        this.value = value
    }

    total = (calculation) => {
        if (this.isAvailableForConditions(calculation)) {
            return this.value
        }
        return 0
    }

    isAvailableForConditions = (calculation) => {
        return true
        // switch (this.condition) {
        //     case DISCOUNT_CONDITION_PERMANENT :
        //         return true
        //     case DISCOUNT_CONDITION_TOTAL :
        //         return calculation.total() >= this.conditionAmount
        //     case DISCOUNT_CONDITION_QTY :
        //         return calculation.getAmount() >= this.conditionAmount
        //     default :
        //         return false
        // }
    }

    getHandler = () => {

    }
}