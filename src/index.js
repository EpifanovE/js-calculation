import { CalculationBuilder } from "./lib/calculation"
import { Discount, DISCOUNT_CONDITION_PERMANENT, DISCOUNT_CONDITION_QTY, DISCOUNT_TYPE_FIX, DISCOUNT_TYPE_PERCENT } from "./lib/discounts/discount"
import { Unit } from "./lib/unit"
import { Option } from "./lib/options/option"
import { OPERATION_MINUS, OPERATION_PLUS, OPERATION_MULTIPLE } from "./lib/options/operatioins"

const priceUnit = new Unit("price");
priceUnit.setOptions([
    new Option("color"),
])

const amountUnit = new Unit("amount")

const calculation = new CalculationBuilder().build({
    units: [
        priceUnit,
        amountUnit,
    ],
    formula: () => {
        return priceUnit.getValue() * amountUnit.getValue()
    },
    onChagne: (value) => {
        console.log(value)
    },
    options: [
        new Option("color"),
        new Option("count"),
    ],
    discounts: [
        new Discount({
            type: DISCOUNT_TYPE_FIX,
            condition: DISCOUNT_CONDITION_PERMANENT,
            conditionAmount: 100,
            value: 150
        }),
        new Discount({
            type: DISCOUNT_TYPE_FIX,
            condition: DISCOUNT_CONDITION_QTY,
            conditionAmount: 200,
            value: 570
        }),
    ]
})

calculation.setUnitValue("price", 50)
calculation.setUnitValue("amount", 10)
calculation.setOptionValue("color", 15)
calculation.setOptionValue("count", 3)
calculation.setUnitOptionValue("price", "color", 3)
