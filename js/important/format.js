fv = value => {
    if (isNaN(value.layer) || isNaN(value.sign) || isNaN(value.mag)) return "NaN";
    if (value.mag === Number.POSITIVE_INFINITY || value.layer === Number.POSITIVE_INFINITY) return value.sign === 1 ? "Infinity" : "-Infinity";
    if (value.m === 0) return value.m.toFixed(3);
    if (value.layer === 0) {
        if (value.mag < 1e4 && value.mag > 1e-4 || value.mag === 0) {
            return (value.sign * value.mag).toFixed(3);
        }
        return (Math.trunc(value.m * 1000) / 1000).toFixed(3) + "e" + value.e.toLocaleString();
    }
    else if (value.layer === 1) return (Math.trunc(value.m * 1000) / 1000).toFixed(3) + "e" + value.e.toLocaleString();
    else return (value.sign === -1 ? "-" : "") + "e".repeat(value.layer) + value.mag.toLocaleString(undefined, {minimumFractionDigits: 3,maximumFractionDigits: 3});
}
fvnd = value => {
    if (isNaN(value.layer) || isNaN(value.sign) || isNaN(value.mag)) return "NaN";
    if (value.mag === Number.POSITIVE_INFINITY || value.layer === Number.POSITIVE_INFINITY) return value.sign === 1 ? "Infinity" : "-Infinity";
    if (value.m === 0) return value.m;
    if (value.layer === 0) {
        if (value.mag < 1e4 && value.mag > 1e-4 || value.mag === 0) {
            return (value.sign * value.mag).toFixed();
        }
        return value.m.toFixed(3) + "e" + value.e.toLocaleString();
    }
    else if (value.layer === 1) return value.m.toFixed(3) + "e" + value.e.toLocaleString();
    else return (value.sign === -1 ? "-" : "") + "e".repeat(value.layer) + value.mag.toLocaleString(undefined, {minimumFractionDigits: 3,maximumFractionDigits: 3});
}