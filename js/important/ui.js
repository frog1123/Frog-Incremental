window.onload = () => updateUI();

function updateUI() {
    document.getElementById("frog-amount-txt").innerHTML = `${fv(player.frogAmount)} Frogs`;
    document.getElementById("frog-gain-txt").innerHTML = `Gaining ${fv(player.ponds.frog.tier1.lvl.mul(player.ponds.frog.tier1.mult))} Frog${player.ponds.frog.tier1.lvl.mul(player.ponds.frog.tier1.mult).neq('1') ? "s" : ""}/s`;

    updatePondsUI();
    updatePondMultiplierUI();

    setTimeout(updateUI, player.settings.uiUpdateSpeed);
};

function updatePondsUI() {
    updatePondUI(1);
    updatePondUI(2);
};

document.getElementById("pond-multiply-buy-btn").onclick = () => buyPondMultiplier();
document.getElementById("pond-multiply-buy-max-btn").onclick = () => buyTriangleMultiplierMax();

document.getElementById("pond-t1-buy-btn").onclick = () => upgradePond(1);
document.getElementById("pond-t2-buy-btn").onclick = () => upgradePond(2);

document.getElementById("save-btn").onclick = () => saveData();
document.getElementById("load-btn").onclick = () => loadData();