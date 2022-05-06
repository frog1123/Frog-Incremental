function saveData() {
    localStorage.setItem("player", btoa(JSON.stringify(player)));
};
function loadData(data) {
    player.frogAmount = new Decimal(data.frogAmount);



    player.ponds.frog.higestTier = data.ponds.frog.higestTier;

    player.ponds.frog.multiplier.lvl = new Decimal(data.ponds.frog.multiplier.lvl)
    player.ponds.frog.multiplier.effectiveness = new Decimal(data.ponds.frog.multiplier.effectiveness)
    player.ponds.frog.multiplier.cost = new Decimal(data.ponds.frog.multiplier.cost)
    player.ponds.frog.multiplier.costIncrease = new Decimal(data.ponds.frog.multiplier.costIncrease)

    player.ponds.frog.river.lvl = new Decimal(data.ponds.frog.river.lvl)
    player.ponds.frog.river.cost = new Decimal(data.ponds.frog.river.cost)
    player.ponds.frog.river.costIncrease = new Decimal(data.ponds.frog.river.costIncrease)
    player.ponds.frog.river.effectiveness = new Decimal(data.ponds.frog.river.effectiveness)

    player.ponds.frog.tier1.unlocked = data.ponds.frog.tier1.unlocked;
    player.ponds.frog.tier2.unlocked = data.ponds.frog.tier2.unlocked;
    player.ponds.frog.tier3.unlocked = data.ponds.frog.tier3.unlocked;
    player.ponds.frog.tier4.unlocked = data.ponds.frog.tier4.unlocked;
    player.ponds.frog.tier5.unlocked = data.ponds.frog.tier5.unlocked;
    player.ponds.frog.tier6.unlocked = data.ponds.frog.tier6.unlocked;

    player.ponds.frog.tier1.lvl = new Decimal(data.ponds.frog.tier1.lvl);
    player.ponds.frog.tier2.lvl = new Decimal(data.ponds.frog.tier2.lvl);
    player.ponds.frog.tier3.lvl = new Decimal(data.ponds.frog.tier3.lvl);
    player.ponds.frog.tier4.lvl = new Decimal(data.ponds.frog.tier4.lvl);
    player.ponds.frog.tier5.lvl = new Decimal(data.ponds.frog.tier5.lvl);
    player.ponds.frog.tier6.lvl = new Decimal(data.ponds.frog.tier6.lvl);

    player.ponds.frog.tier1.cost = new Decimal(data.ponds.frog.tier1.cost);
    player.ponds.frog.tier2.cost = new Decimal(data.ponds.frog.tier2.cost);
    player.ponds.frog.tier3.cost = new Decimal(data.ponds.frog.tier3.cost);
    player.ponds.frog.tier4.cost = new Decimal(data.ponds.frog.tier4.cost);
    player.ponds.frog.tier5.cost = new Decimal(data.ponds.frog.tier5.cost);
    player.ponds.frog.tier6.cost = new Decimal(data.ponds.frog.tier6.cost);

    player.ponds.frog.tier1.costIncrease = new Decimal(data.ponds.frog.tier1.costIncrease);
    player.ponds.frog.tier2.costIncrease = new Decimal(data.ponds.frog.tier2.costIncrease);
    player.ponds.frog.tier3.costIncrease = new Decimal(data.ponds.frog.tier3.costIncrease);
    player.ponds.frog.tier4.costIncrease = new Decimal(data.ponds.frog.tier4.costIncrease);
    player.ponds.frog.tier5.costIncrease = new Decimal(data.ponds.frog.tier5.costIncrease);
    player.ponds.frog.tier6.costIncrease = new Decimal(data.ponds.frog.tier6.costIncrease);

    player.ponds.frog.tier1.mult = new Decimal(data.ponds.frog.tier1.mult);
    player.ponds.frog.tier2.mult = new Decimal(data.ponds.frog.tier2.mult);
    player.ponds.frog.tier3.mult = new Decimal(data.ponds.frog.tier3.mult);
    player.ponds.frog.tier4.mult = new Decimal(data.ponds.frog.tier4.mult);
    player.ponds.frog.tier5.mult = new Decimal(data.ponds.frog.tier5.mult);
    player.ponds.frog.tier6.mult = new Decimal(data.ponds.frog.tier6.mult);

    player.ponds.frog.tier1.amountBought = new Decimal(data.ponds.frog.tier1.amountBought);
    player.ponds.frog.tier2.amountBought = new Decimal(data.ponds.frog.tier2.amountBought);
    player.ponds.frog.tier3.amountBought = new Decimal(data.ponds.frog.tier3.amountBought);
    player.ponds.frog.tier4.amountBought = new Decimal(data.ponds.frog.tier4.amountBought);
    player.ponds.frog.tier5.amountBought = new Decimal(data.ponds.frog.tier5.amountBought);
    player.ponds.frog.tier6.amountBought = new Decimal(data.ponds.frog.tier6.amountBought);




    player.settings.uiUpdateSpeed = data.settings.uiUpdateSpeed;
    player.devSettings.updateSpeed = data.devSettings.updateSpeed;

    showUnlocked();
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