export class CalculationBuilder {
    build(params) {
        return new Calculation(params)
    }
}

export class Calculation {
    constructor({onChagne, discounts, units, options, formula}) {
        this.onChagne = onChagne
        this.discounts = discounts
        this.options = []
        this.units = units
        this.options = options
        this.formula = formula
    }

    total = () => {
        try {
            if (this.options.length > 0) {
                return this.options.reduce((state, currentOption) => {
                    return currentOption.calculate(state)
                }, this.formula())
            }
            
            return this.formula()
        } catch (e) {
            throw e
        }
    }

    calculate = () => {
        // this.applyDisounts()
        
        this.onChagne({
            total: this.total(),
        })
    }

    setUnitValue = (unitName, value) => {
        const unit = this.units.filter(unit => unit.name === unitName)[0]
        
        if (!unit) {
            console.error(`Unit with name ${unitName} is not defined.`)
            return
        }
        
        unit.setValue(value)
        this.calculate()
    }

    setOptionValue = (optionName, value) => {
        const option = this.options.filter(option => option.name === optionName)[0]

        if (!option) {
            console.error(`Option with name ${optionName} is not defined.`)
            return
        }

        option.setValue(value)
        this.calculate()
    }

    setUnitOptionValue = (unitName, optionName, value) => {
        const unit = this.units.filter(unit => unit.name === unitName)[0]

        if (!unit) {
            console.error(`Unit with name ${unitName} is not defined.`)
            return
        }

        const option = unit.options.filter(option => option.name === optionName)[0]

        if (!option) {
            console.error(`Option with name ${optionName} is not defined.`)
            return
        }
        
        option.setValue(value)
       
        this.calculate()
    }

    // applyDisounts = () => {
    //     if (this.discounts.length > 0) {
    //         const discountTotalArray = this.discounts
    //             .filter(discount => discount.total(this) !== 0)
    //             .map(discount => discount.total(this))

    //         this.discountsTotal = discountTotalArray.sort()[discountTotalArray.length - 1]
    //     }
    // }
}