window.onload = function() {
    updateUI();
};

function updateUI() {
    document.getElementById("frog-amount-txt").innerHTML = `${fv(player.frogAmount)} Frogs`;

    setTimeout(updateUI, 50);
};

document.getElementById("btn-frog").onclick = () => player.frogAmount = player.frogAmount.add('1');