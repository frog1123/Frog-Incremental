function updatePondUI(pond) {
    var multiplier = player.ponds.frog.multiplier.lvl.mul(player.ponds.frog.river.lvl.eq('0') ? '1' : Decimal.pow(player.ponds.frog.river.effectiveness, player.ponds.frog.river.lvl));
    var pondnum = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'];

    if (pond === 1) document.getElementById("pond-t1-gen-txt").innerHTML = `Generating ${fvnd(player.ponds.frog.tier1.lvl.mul(player.ponds.frog.tier1.mult).mul(multiplier))} Frog${player.ponds.frog.tier1.lvl.mul(player.ponds.frog.tier1.mult.mul(multiplier)).neq('1') ? "s" : ""}/s`;
    else document.getElementById(`pond-t${pond}-gen-txt`).innerHTML = `Generating ${fvnd(player.ponds.frog[`tier${pond}`].lvl.mul(player.ponds.frog[`tier${pond}`].mult.mul(multiplier)))} ${pondnum[pond - 2]} Pond${player.ponds.frog[`tier${pond}`].lvl.mul(player.ponds.frog[`tier${pond}`].mult.mul(multiplier)).neq('1') ? "s" : ""}/s`;

    document.getElementById(`pond-t${pond}-amount`).innerHTML = `${fvnd(player.ponds.frog[`tier${pond}`].lvl)}`;
    document.getElementById(`pond-t${pond}-mult-txt`).innerHTML = `×${fv(player.ponds.frog[`tier${pond}`].mult.mul(multiplier))} (${player.ponds.frog[`tier${pond}`].amountBought})`;
    document.getElementById(`pond-t${pond}-buy-btn-txt`).innerHTML = `Cost: ${fv(player.ponds.frog[`tier${pond}`].cost)}`;

    if (player.frogAmount.gte(player.ponds.frog[`tier${pond}`].cost)) {
        document.getElementById(`pond-t${pond}-buy-btn`).classList.add("btn-can-afford");
        document.getElementById(`pond-t${pond}-buy-btn`).classList.remove("btn-cant-afford");
    }
    else {
        document.getElementById(`pond-t${pond}-buy-btn`).classList.add("btn-cant-afford");
        document.getElementById(`pond-t${pond}-buy-btn`).classList.remove("btn-can-afford");
    };
}
function upgradePond(pond) {
    if (player.frogAmount.gte(player.ponds.frog[`tier${pond}`].cost)) {
        player.frogAmount = player.frogAmount.sub(player.ponds.frog[`tier${pond}`].cost);
        
        player.ponds.frog[`tier${pond}`].lvl = player.ponds.frog[`tier${pond}`].lvl.add('1');
        player.ponds.frog[`tier${pond}`].amountBought = player.ponds.frog[`tier${pond}`].amountBought.add('1');
        if (player.ponds.frog[`tier${pond}`].amountBought.eq('10')) {
            player.ponds.frog[`tier${pond}`].cost = player.ponds.frog[`tier${pond}`].cost.mul(player.ponds.frog[`tier${pond}`].costIncrease);
            player.ponds.frog[`tier${pond}`].amountBought = new Decimal('0');
            player.ponds.frog[`tier${pond}`].mult = player.ponds.frog[`tier${pond}`].mult.mul('2');
        };
    };
};
function generatePonds() {
    var speed = 1000 / player.devSettings.updateSpeed;
    var pond = player.ponds.frog;
    var multiplier = player.ponds.frog.multiplier.lvl.mul(player.ponds.frog.river.lvl.eq('0') ? '1' : Decimal.pow(player.ponds.frog.river.effectiveness, player.ponds.frog.river.lvl));
    var pondmult = pond => player.ponds.frog[`tier${pond}`].mult;
    var mult = pond => multiplier.mul(pondmult(pond));

    player.frogAmount = player.frogAmount.add(pond.tier1.lvl.div(speed).mul(pond.multiplier.lvl));

    pond.tier1.lvl = pond.tier1.lvl.add(pond.tier2.lvl.div(speed).mul(mult(2)));
    pond.tier2.lvl = pond.tier2.lvl.add(pond.tier3.lvl.div(speed).mul(mult(3)));
    pond.tier3.lvl = pond.tier3.lvl.add(pond.tier4.lvl.div(speed).mul(mult(4)));
    pond.tier4.lvl = pond.tier4.lvl.add(pond.tier5.lvl.div(speed).mul(mult(5)));
    pond.tier5.lvl = pond.tier5.lvl.add(pond.tier6.lvl.div(speed).mul(mult(6)));
};

function updateRiverUI() {
    var pondnum = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'];

    document.getElementById("river-amount-txt").innerHTML = `${player.ponds.frog.river.lvl} River${player.ponds.frog.river.lvl.neq('1') ? "s" : ""}`
    document.getElementById("river-require-txt").innerHTML = `Requires ${player.ponds.frog.river.cost} ${pondnum[player.ponds.frog.higestTier - 1]} Ponds`;

    if (player.ponds.frog[`tier${player.ponds.frog.higestTier}`].lvl.gte(player.ponds.frog.river.cost)) {
        document.getElementById("river-buy-btn").classList.add("btn-can-afford");
        document.getElementById("river-buy-btn").classList.remove("btn-cant-afford");
    }
    else {
        document.getElementById("river-buy-btn").classList.add("btn-cant-afford");
        document.getElementById("river-buy-btn").classList.remove("btn-can-afford");
    }
    if (player.ponds.frog.higestTier < 6) {
        document.getElementById("river-buy-btn-txt").innerHTML = `Local Reset to unlock the ${pondnum[player.ponds.frog.higestTier]} Pond and give all ponds a ×${player.ponds.frog.river.effectiveness} multiplier`;
    }
    else {
        document.getElementById("river-buy-btn-txt").innerHTML = `Local Reset to give all ponds a ×${player.ponds.frog.river.effectiveness} multiplier`;
    }
}
function upgradeRiver() {
    if (player.ponds.frog[`tier${player.ponds.frog.higestTier}`].lvl.gte(player.ponds.frog.river.cost)) {
        localReset();

        player.ponds.frog.river.lvl = player.ponds.frog.river.lvl.add('1');

        if (player.ponds.frog.higestTier < 6) {
            player.ponds.frog.higestTier++;
            player.ponds.frog[`tier${player.ponds.frog.higestTier}`].unlocked = true;

            document.getElementById(`pond-t${player.ponds.frog.higestTier}-div`).style.display = "grid";
        }
        else {
            player.ponds.frog.river.cost = player.ponds.frog.river.cost.add(player.ponds.frog.river.costIncrease);
        }
    };
};
function updateLakeUI() {
    document.getElementById("lake-amount-txt").innerHTML = `${player.ponds.frog.lake.lvl} Lake${player.ponds.frog.lake.lvl.neq('1') ? "s" : ""}`;
    document.getElementById("lake-require-txt").innerHTML = `Requires ${player.ponds.frog.lake.cost} Rivers`;

    if (player.ponds.frog.river.lvl.gte(player.ponds.frog.lake.cost)) {
        document.getElementById("lake-buy-btn").classList.add("btn-can-afford");
        document.getElementById("lake-buy-btn").classList.remove("btn-cant-afford");
    }
    else {
        document.getElementById("lake-buy-btn").classList.add("btn-cant-afford");
        document.getElementById("lake-buy-btn").classList.remove("btn-can-afford");
    };
    document.getElementById("lake-buy-btn-txt").innerHTML = `Global Reset to make rivers ×${player.ponds.frog.lake.effectiveness} effective`;
}
function upgradeLake() {
    if (player.ponds.frog.river.lvl.gte(player.ponds.frog.lake.cost)) {
        globalReset();

        player.ponds.frog.tier4.unlocked = false;
        player.ponds.frog.tier5.unlocked = false;
        player.ponds.frog.tier6.unlocked = false;
        showUnlocked();

        player.ponds.frog.lake.lvl = player.ponds.frog.lake.lvl.add('1');
        player.ponds.frog.river.effectiveness = player.ponds.frog.river.effectiveness.mul(player.ponds.frog.lake.lvl.eq('0') ? '1' : Decimal.pow(player.ponds.frog.lake.effectiveness, player.ponds.frog.lake.lvl));
        player.ponds.frog.lake.cost = player.ponds.frog.lake.cost.add(player.ponds.frog.lake.costIncrease);
    };
};