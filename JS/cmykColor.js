function cmykColor(c, m, y, k) {
    var newCMYK = new CMYKColor();
    newCMYK.cyan = c;
    newCMYK.magenta = m;
    newCMYK.yellow = y;
    newCMYK.black = k;
    return newCMYK;
};
