export const OPERATION_PLUS = "OPERATION_PLUS"
export const OPERATION_MINUS = "OPERATION_MINUS"
export const OPERATION_MULTIPLE = "OPERATION_MULTIPLE"

export class OperationBuilder {
    build(operationName) {
        switch (operationName) {
            case OPERATION_PLUS:
                return operationPlus
            case OPERATION_MINUS:
                return operationMinus
            case OPERATION_MULTIPLE:
                return operationMultiple
        }
    }
}

const operationPlus = (optionValue, unitValue) => {
    return optionValue + unitValue
}

const operationMinus = (optionValue, unitValue) => {
    return unitValue - optionValue
}

const operationMultiple = (optionValue, unitValue) => {
    return unitValue * (optionValue ? optionValue : 1)
}