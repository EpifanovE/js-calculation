export class Unit {
    constructor(name) {
        this.name = name
        this._value = null
        this.options = []
    }

    setValue = (value) => {
        this._value = value
    }

    getValue = () => {
        if (this.options.length > 0) {
            return this.options.reduce((state, currentOption) => {
                return currentOption.calculate(state)
            }, this._value)
        }
        return this._value
    }

    setOptions = (options) => {
        this.options = options
    }
}