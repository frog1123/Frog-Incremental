var player = {
    frogAmount: new Decimal('1e4'),
    ponds: {
        frog: {
            multiplier: {
                lvl: new Decimal('1'),
                effectiveness: new Decimal('1.1'),
                cost: new Decimal('1000'),
                costIncrease: new Decimal('10')
            },
            tier1: {
                lvl: new Decimal('0'),
                cost: new Decimal('10'),
                mult: new Decimal('1'),
                amountBought: new Decimal('0')
            },
            tier2: {
                lvl: new Decimal('0'),
                cost: new Decimal('100'),
                mult: new Decimal('1'),
                amountBought: new Decimal('0')
            }
        }
    },
    settings: {
        uiUpdateSpeed: 100
    },
    devsettings: {
        updateSpeed: 100
    }
}