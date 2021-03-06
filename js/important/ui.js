var activeTab = 1;

window.onload = () => {
    showUnlocked();
    updateUI();
}

function updateUI() {
    document.getElementById("frog-amount-txt").innerHTML = `${fv(player.frogAmount)} Frogs`;
    document.getElementById("frog-gain-txt").innerHTML = `Gaining ${fv(player.ponds.frog.tier1.lvl.mul(player.ponds.frog.tier1.mult).mul(player.ponds.frog.river.lvl.eq('0') ? '1' : Decimal.pow(player.ponds.frog.river.effectiveness, player.ponds.frog.river.lvl)))} Frog${player.ponds.frog.tier1.lvl.mul(player.ponds.frog.tier1.mult.mul(player.ponds.frog.river.lvl.eq('0') ? '1' : Decimal.pow(player.ponds.frog.river.effectiveness, player.ponds.frog.river.lvl))).neq('1') ? "s" : ""}/s`;

    if (activeTab === 1) {
        updatePondsUI();
        updatePondMultiplierUI();
        updateRiverUI();
        updateLakeUI();
    };

    setTimeout(updateUI, player.settings.uiUpdateSpeed);
};

function updatePondsUI() {
    updatePondUI(1, player.ponds.frog.amountToBuy);
    updatePondUI(2, player.ponds.frog.amountToBuy);
    updatePondUI(3, player.ponds.frog.amountToBuy);
    updatePondUI(4, player.ponds.frog.amountToBuy);
    updatePondUI(5, player.ponds.frog.amountToBuy);
    updatePondUI(6, player.ponds.frog.amountToBuy);
};

document.getElementById("page-1-btn").onclick = () => switchTab(1);
document.getElementById("page-2-btn").onclick = () => switchTab(2);

document.getElementById("pond-multiply-buy-btn").onclick = () => buyPondMultiplier();
document.getElementById("pond-multiply-buy-max-btn").onclick = () => buyPondMultiplierMax();

document.getElementById("river-buy-btn").onclick = () => upgradeRiver();
document.getElementById("lake-buy-btn").onclick = () => upgradeLake();

document.getElementById("pond-buy-type-toggle-btn").onclick = () => togglePondAmount();

document.getElementById("pond-t1-buy-btn").onclick = () => upgradePond(1, player.ponds.frog.amountToBuy);
document.getElementById("pond-t2-buy-btn").onclick = () => upgradePond(2, player.ponds.frog.amountToBuy);
document.getElementById("pond-t3-buy-btn").onclick = () => upgradePond(3, player.ponds.frog.amountToBuy);
document.getElementById("pond-t4-buy-btn").onclick = () => upgradePond(4, player.ponds.frog.amountToBuy);
document.getElementById("pond-t5-buy-btn").onclick = () => upgradePond(5, player.ponds.frog.amountToBuy);
document.getElementById("pond-t6-buy-btn").onclick = () => upgradePond(6, player.ponds.frog.amountToBuy);

document.getElementById("save-btn").onclick = () => saveData();
document.getElementById("load-btn").onclick = () => loadData(JSON.parse(atob(localStorage.getItem("player"))));
document.getElementById("import-btn").onclick = () => importData();
document.getElementById("export-btn").onclick = () => exportData();

function showUnlocked() {
    if (player.ponds.frog.tier4.unlocked) document.getElementById("pond-t4-div").style.display = "grid"
    else document.getElementById("pond-t4-div").style.display = "none";
    if (player.ponds.frog.tier5.unlocked) document.getElementById("pond-t5-div").style.display = "grid"
    else document.getElementById("pond-t5-div").style.display = "none";
    if (player.ponds.frog.tier6.unlocked) document.getElementById("pond-t6-div").style.display = "grid"
    else document.getElementById("pond-t6-div").style.display = "none";
};
function switchTab(tab) {
    document.getElementById("page-1").style.display = "none";
    document.getElementById("page-2").style.display = "none";

    activeTab = tab;
    document.getElementById(`page-${tab}`).style.display = "block";
};