window.onload = () => {
    showUnlocked();
    updateUI();
}

function updateUI() {
    document.getElementById("frog-amount-txt").innerHTML = `${fv(player.frogAmount)} Frogs`;
    document.getElementById("frog-gain-txt").innerHTML = `Gaining ${fv(player.ponds.frog.tier1.lvl.mul(player.ponds.frog.tier1.mult))} Frog${player.ponds.frog.tier1.lvl.mul(player.ponds.frog.tier1.mult).neq('1') ? "s" : ""}/s`;

    updatePondsUI();
    updatePondMultiplierUI();
    updateRiverUI();

    setTimeout(updateUI, player.settings.uiUpdateSpeed);
};

function updatePondsUI() {
    updatePondUI(1);
    updatePondUI(2);
    updatePondUI(3);
    updatePondUI(4);
    updatePondUI(5);
    updatePondUI(6);
};

document.getElementById("pond-multiply-buy-btn").onclick = () => buyPondMultiplier();
document.getElementById("pond-multiply-buy-max-btn").onclick = () => buyPondMultiplierMax();

document.getElementById("river-buy-btn").onclick = () => upgradeRiver();

document.getElementById("pond-t1-buy-btn").onclick = () => upgradePond(1);
document.getElementById("pond-t2-buy-btn").onclick = () => upgradePond(2);
document.getElementById("pond-t3-buy-btn").onclick = () => upgradePond(3);
document.getElementById("pond-t4-buy-btn").onclick = () => upgradePond(4);
document.getElementById("pond-t5-buy-btn").onclick = () => upgradePond(5);
document.getElementById("pond-t6-buy-btn").onclick = () => upgradePond(6);

document.getElementById("save-btn").onclick = () => saveData();
document.getElementById("load-btn").onclick = () => loadData(JSON.parse(atob(localStorage.getItem("player"))));
document.getElementById("import-btn").onclick = () => importData();
document.getElementById("export-btn").onclick = () => exportData();

function showUnlocked() {
    if (player.ponds.frog.tier4.unlocked) document.getElementById("pond-t4-div").style.display = "grid";
    if (player.ponds.frog.tier5.unlocked) document.getElementById("pond-t5-div").style.display = "grid";
    if (player.ponds.frog.tier6.unlocked) document.getElementById("pond-t6-div").style.display = "grid";
};