var amount, buying, cost, costIncrease;

function updatePondMultiplierUI() {

    amount = new Decimal(Decimal.floor(Decimal.log10(Decimal.fromComponents(1, player.frogAmount.layer, player.frogAmount.mag)))); // frog amount
    cost = new Decimal((Decimal.floor(Decimal.log10(Decimal.fromComponents(1, player.ponds.frog.multiplier.cost.layer, player.ponds.frog.multiplier.cost.mag))))); // cost
    
    costIncrease = new Decimal(Decimal.log10(player.ponds.frog.multiplier.costIncrease))
    
    buying = Decimal.floor(amount.sub(cost).div(costIncrease))
            .add(player.ponds.frog.multiplier.costIncrease.gt('10') ? '1' : player.ponds.frog.multiplier.costIncrease.lt('10') ? '-1' : '0'); // if costincrease doesnt eq 10



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
    if (buying.gt('0')) {;
        document.getElementById("pond-multiply-buy-btn-max-txt").innerHTML = `Buy max (${fvnd(buying)})`;
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
    if (buying.gt('0')) {
        player.frogAmount = player.frogAmount.sub(Decimal.pow(player.ponds.frog.multiplier.costIncrease, buying));
        player.ponds.frog.multiplier.cost = player.ponds.frog.multiplier.cost.mul(Decimal.pow(player.ponds.frog.multiplier.costIncrease, buying));
        player.ponds.frog.multiplier.lvl = player.ponds.frog.multiplier.lvl.mul(Decimal.pow(player.ponds.frog.multiplier.effectiveness, buying));

        buyPondMultiplier();
    };
};