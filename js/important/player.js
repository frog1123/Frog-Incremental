var player = {
    frogAmount: new Decimal('1e6'),
    ponds: {
        frog: {
            higestTier: 3,
            multiplier: {
                lvl: new Decimal('1'),
                effectiveness: new Decimal('1.1'),
                cost: new Decimal('1000'),
                costIncrease: new Decimal('10')
            },
            river: {
                lvl: new Decimal('0'),
                cost: new Decimal('20'),
                costIncrease: new Decimal('20'),
                effectiveness: new Decimal('2')
            },
            lake: {
                lvl: new Decimal('0'),
                cost: new Decimal('5'),
                costIncrease: new Decimal('5'),
                effectiveness: new Decimal('2')
            },
            tier1: {
                lvl: new Decimal('0'),
                cost: new Decimal('10'),
                costIncrease: new Decimal('100'),
                mult: new Decimal('1'),
                amountBought: new Decimal('0')
            },
            tier2: {
                lvl: new Decimal('0'),
                cost: new Decimal('100'),
                costIncrease: new Decimal('100'),
                mult: new Decimal('1'),
                amountBought: new Decimal('0')
            },
            tier3: {
                lvl: new Decimal('0'),
                cost: new Decimal('1e4'),
                costIncrease: new Decimal('1000'),
                mult: new Decimal('1'),
                amountBought: new Decimal('0')
            },
            tier4: {
                unlocked: false,
                lvl: new Decimal('0'),
                cost: new Decimal('1e6'),
                costIncrease: new Decimal('1000'),
                mult: new Decimal('1'),
                amountBought: new Decimal('0')
            },
            tier5: {
                unlocked: false,
                lvl: new Decimal('0'),
                cost: new Decimal('1e10'),
                costIncrease: new Decimal('1e4'),
                mult: new Decimal('1'),
                amountBought: new Decimal('0')
            },
            tier6: {
                unlocked: false,
                lvl: new Decimal('0'),
                cost: new Decimal('1e16'),
                costIncrease: new Decimal('1e4'),
                mult: new Decimal('1'),
                amountBought: new Decimal('0')
            },
        }
    },
    settings: {
        uiUpdateSpeed: 100
    },
    devSettings: {
        updateSpeed: 100
    }
}