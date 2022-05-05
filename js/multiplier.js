var pondMultiplerCanBuyAmount;
var a, b, c, d;

function updatePondMultiplierUI() {
    a = new Decimal(Decimal.floor(Decimal.log10(Decimal.fromComponents(1, player.frogAmount.layer, player.frogAmount.mag)))); // triangle amt
    b = Math.pow(10, Math.floor(Math.log10(player.frogAmount.mag))) / Math.pow(10, Math.floor(Math.log10(player.ponds.frog.multiplier.cost.mag))) > 1 ? 1 : 0; // if triangle amt man > 1
    c = new Decimal(Decimal.floor(Decimal.log10(Decimal.fromComponents(1, player.ponds.frog.multiplier.cost.layer, player.ponds.frog.multiplier.cost.mag)))); // cost amt
    d = new Decimal(Decimal.log10(Decimal.fromComponents(1, player.ponds.frog.multiplier.costIncrease.layer, player.ponds.frog.multiplier.costIncrease.mag))); // cost increase 

    pondMultiplerCanBuyAmount = new Decimal(a.eq(c) ? '1' : Decimal.floor(a.sub(c).div(d)));


    document.getElementById("pond-multiply-buy-btn-txt").innerHTML = `Cost: ${fv(player.ponds.frog.multiplier.cost)}`;
    document.getElementById("pond-multiply-effectiveness-txt").innerHTML = `×${fv(player.ponds.frog.multiplier.effectiveness)}`;
    document.getElementById("pond-multiply-current-mult-txt").innerHTML = `×${fv(player.ponds.frog.multiplier.lvl)}`;
    if (player.frogAmount.gte(player.ponds.frog.multiplier.cost)) {
        document.getElementById("pond-multiply-buy-btn").classList.add("btn-can-afford");
        document.getElementById("pond-multiply-buy-btn").classList.remove("btn-cant-afford");
    }
    else {
        document.getElementById("pond-multiply-buy-btn").classList.add("btn-cant-afford");
        document.getElementById("pond-multiply-buy-btn").classList.remove("btn-can-afford");
    };
    if (pondMultiplerCanBuyAmount.gt("0")) {;
        document.getElementById("pond-multiply-buy-btn-max-txt").innerHTML = `Buy max (${fvnd(pondMultiplerCanBuyAmount)})`;
        document.getElementById("pond-multiply-buy-max-btn").classList.add("btn-can-afford");
        document.getElementById("pond-multiply-buy-max-btn").classList.remove("btn-cant-afford");
    }
    else {
        document.getElementById("pond-multiply-buy-btn-max-txt").innerHTML = "Buy max (0)";
        document.getElementById("pond-multiply-buy-max-btn").classList.add("btn-cant-afford");
        document.getElementById("pond-multiply-buy-max-btn").classList.remove("btn-can-afford");
    };
};
function buyPondMultiplier() {
    if (player.frogAmount.gte(player.ponds.frog.multiplier.cost)) {
        player.frogAmount = player.frogAmount.sub(player.ponds.frog.multiplier.cost);
        player.ponds.frog.multiplier.cost = player.ponds.frog.multiplier.cost.mul(player.ponds.frog.multiplier.costIncrease);
        player.ponds.frog.multiplier.lvl = player.ponds.frog.multiplier.lvl.mul(player.ponds.frog.multiplier.effectiveness);
    };
};
function buyPondMultiplierMax() {
    if (player.frogAmount.eq('0')) {
        return;
    };
    if (pondMultiplerCanBuyAmount.gt('0')) {
        player.ponds.frog.multiplier.cost = player.ponds.frog.multiplier.cost.mul(Decimal.pow(player.ponds.frog.multiplier.costIncrease, pondMultiplerCanBuyAmount));
        player.frogAmount = player.frogAmount.sub(Decimal.pow(player.ponds.frog.multiplier.costIncrease, pondMultiplerCanBuyAmount).mul("100"))
        .add(pondMultiplerCanBuyAmount.gt('1e10') ? '0' : new Decimal('0')
        .sub(pondMultiplerCanBuyAmount.gt('1') ? Decimal.pow(player.ponds.frog.multiplier.costIncrease, pondMultiplerCanBuyAmount).mul('10') : '0')
        .sub(pondMultiplerCanBuyAmount.gt('2') ? Decimal.pow(player.ponds.frog.multiplier.costIncrease, pondMultiplerCanBuyAmount) : '0')
        .sub(pondMultiplerCanBuyAmount.gt('3') ? Decimal.pow(player.ponds.frog.multiplier.costIncrease, pondMultiplerCanBuyAmount).div('10') : '0')
        .sub(pondMultiplerCanBuyAmount.gt('4') ? Decimal.pow(player.ponds.frog.multiplier.costIncrease, pondMultiplerCanBuyAmount).div("100") : '0')
        .add(Decimal.pow('10', pondMultiplerCanBuyAmount).sub(Decimal.pow(player.ponds.frog.multiplier.costIncrease, pondMultiplerCanBuyAmount))));

        player.ponds.frog.multiplier.lvl = player.ponds.frog.multiplier.lvl.mul(Decimal.pow(player.ponds.frog.multiplier.effectiveness, pondMultiplerCanBuyAmount));

        buyPondMultiplier();
    };
};