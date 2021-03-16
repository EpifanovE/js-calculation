import {OperationBuilder} from "./operatioins"

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
                const operation = (new OperationBuilder()).build(current.operation)
                return operation(current.operationValue, state)
            }, unitValue)
        }

        const operation = (new OperationBuilder()).build(this.value.operation)
        const value = this.value.value ? this.value.value : 1
        return operation(this.value.operationValue * value, unitValue)
    }
}