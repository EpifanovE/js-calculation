import { expect } from "chai";
import { Discount, DISCOUNT_CONDITION_PERMANENT, DISCOUNT_CONDITION_QTY, DISCOUNT_TYPE_FIX, DISCOUNT_TYPE_PERCENT } from "../lib/discounts/discount"
import {CalculationBuilder, Option, Unit, OPERATION_MINUS, OPERATION_PLUS, OPERATION_MULTIPLE} from '../lib'

const getCalculation = (onChange) => {
    const priceUnit = new Unit("price");
    priceUnit.setOptions([
        new Option("color"),
    ])

    const amountUnit = new Unit("amount")

    const calculation = (new CalculationBuilder()).build({
        units: [
            priceUnit,
            amountUnit,
        ],
        formula: () => {
            return priceUnit.getValue() * amountUnit.getValue()
        },
        onChagne: onChange,
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

    return calculation
}

describe("one value option", () => {

    let result = null

    const calculation = getCalculation((value) => { result = value })

    it("set unit operation value", () => {
        calculation.setUnitOptionValue("price", "color", { operation: OPERATION_PLUS, operationValue: 3 })
        expect(result.total).be.equal(530)
    })

    it("change unit operation value", () => {
        calculation.setUnitOptionValue("price", "color", { operation: OPERATION_PLUS, operationValue: 5 })
        expect(result.total).be.equal(550)
    })

    it("unit operation value type minus", () => {
        calculation.setUnitOptionValue("price", "color", { operation: OPERATION_MINUS, operationValue: 5 })
        expect(result.total).be.equal(450)
    })

    it("unit operation value type multi", () => {
        calculation.setUnitOptionValue("price", "color", { operation: OPERATION_MULTIPLE, operationValue: 3 })
        expect(result.total).be.equal(1500)
    })

    it("unit operation value is 0", () => {
        calculation.setUnitOptionValue("price", "color", { operation: OPERATION_MULTIPLE, operationValue: 0 })
        expect(result.total).be.equal(500)
    })

    it("unit operation value is null", () => {
        calculation.setUnitOptionValue("price", "color", null)
        expect(result.total).be.equal(500)
    })

    it("change unit value", () => {
        calculation.setUnitOptionValue("price", "color", null)
        calculation.setUnitValue("amount", 20)
        expect(result.total).be.equal(1000)
    })
})

describe("multi value option", () => {

    let result = null

    const calculation = getCalculation((value) => {
        result = value
    })

    it("description", () => {
        calculation.setUnitOptionValue("price", "color", [
            { operation: OPERATION_PLUS, operationValue: 10 },
            { operation: OPERATION_MINUS, operationValue: 5 },
        ])

        expect(result.total).to.equal(550)
    })
})

describe("number value option", () => {

    let result = null

    const calculation = getCalculation((value) => {
        result = value
    })

    calculation.setUnitOptionValue("price", "color", { operation: OPERATION_PLUS, value: 5, operationValue: 3 })

    it("description", () => {
        expect(result.total).to.equal(650)
    })
})
