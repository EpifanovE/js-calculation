import {OperationBuilder, applyOperation} from "./operatioins"

export class Option {
    constructor(name) {
        this.name = name
        this.value = null
    }

    setValue = (value) => {
        this.value = value
    }

    calculate = (unitValue) => {
    
        if (this.value === null) {
            return unitValue
        }

        if (Array.isArray(this.value)) {
            return this.value.reduce((state, current) => {
                return applyOperation(current.operation, state, current.operationValue)
            }, unitValue)
        }

        return applyOperation(this.value.operation, unitValue, this.value.operationValue, this.value.value)
    }
}