function saveData() {
    localStorage.setItem("player", btoa(JSON.stringify(player)));
};
function loadData(data) {
    player.frogAmount = new Decimal(data.frogAmount);

    player.ponds.frog.tier1.lvl = new Decimal(data.ponds.frog.tier1.lvl);
    player.ponds.frog.tier2.lvl = new Decimal(data.ponds.frog.tier2.lvl);

    player.ponds.frog.tier1.cost = new Decimal(data.ponds.frog.tier1.cost);
    player.ponds.frog.tier2.cost = new Decimal(data.ponds.frog.tier2.cost);

    player.ponds.frog.tier1.mult = new Decimal(data.ponds.frog.tier1.mult);
    player.ponds.frog.tier2.mult = new Decimal(data.ponds.frog.tier2.mult);

    player.ponds.frog.tier1.amountBought = new Decimal(data.ponds.frog.tier1.amountBought);
    player.ponds.frog.tier2.amountBought = new Decimal(data.ponds.frog.tier2.amountBought);
};
function exportData() {
    let exportData = btoa(JSON.stringify(player));
    navigator.clipboard.writeText(exportData);

    alert("Save copied to clipboard!");
};
function importData() {
    let importedData = JSON.parse(atob(prompt("Input your save. This will overwrite your current save.")));
    
    loadData(importedData);
};