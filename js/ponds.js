function updatePondUI(pond) {
    var pondnum = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'];

    if (pond === 1) document.getElementById("pond-t1-gen-txt").innerHTML = `Generating ${fvnd(player.ponds.frog.tier1.lvl.mul(player.ponds.frog.tier1.mult))} Frog${player.ponds.frog.tier1.lvl.mul(player.ponds.frog.tier1.mult).neq('1') ? "s" : ""}/s`;
    else document.getElementById(`pond-t${pond}-gen-txt`).innerHTML = `Generating ${fvnd(player.ponds.frog.tier2.lvl.mul(player.ponds.frog[`tier${1}`].mult))} ${pondnum[pond - 2]} Pond${player.ponds.frog[`tier${pond}`].lvl.mul(player.ponds.frog[`tier${pond}`].mult).neq('1') ? "s" : ""}/s`;

    document.getElementById(`pond-t${pond}-amount`).innerHTML = `${fvnd(player.ponds.frog[`tier${pond}`].lvl)} ×${fv(player.ponds.frog[`tier${pond}`].mult)} (${player.ponds.frog[`tier${pond}`].amountBought})`;
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
            player.ponds.frog[`tier${pond}`].amountBought = new Decimal('0');
            player.ponds.frog[`tier${pond}`].mult = player.ponds.frog[`tier${pond}`].mult.mul('2');
        };
    };
};

function generatePonds() {
    var speed = 1000 / player.devsettings.updateSpeed;

    player.frogAmount = player.frogAmount.add(player.ponds.frog.tier1.lvl.div(speed).mul(player.ponds.frog.multiplier.lvl));

    player.ponds.frog.tier1.lvl = player.ponds.frog.tier1.lvl.add(player.ponds.frog.tier2.lvl.div(speed).mul(player.ponds.frog.multiplier.lvl));
}