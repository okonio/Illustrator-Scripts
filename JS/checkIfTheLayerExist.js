function checkExistLayer(nameLayer) {

    var doc = app.activeDocument;
    try {
        var layer = doc.layers[nameLayer];
        layer.visible = true;
        layer.locked = false;

    } catch (err) {
        alert("There is no such layer: " + nameLayer);
    }
    return layer;
};
