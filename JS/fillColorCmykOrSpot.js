function colorToFill(color, coverage) { 
    var doc = app.activeDocument;

    if (color == "Black") {
        var fillColor = cmykColor(0, 0, 0, coverage);
    } else if (color == "Cyan") {
        var fillColor = cmykColor(coverage, 0, 0, 0);
    } else if (color == "Magenta") {
        var fillColor = cmykColor(0, coverage, 0, 0);
    } else if (color == "Yellow") {
        var fillColor = cmykColor(0, 0, coverage, 0);
    }  else {
        var fillColor = doc.swatches.getByName(jaki).color;
    }
    return fillKolor;
};
