function checkOrCreateNewLayer(nameLayer) {

    var doc = app.activeDocument;
    try {
        var layer = doc.layers[nameLayer];
        layer.visible = true;
        layer.locked = false;

    } catch (err) {
        var layer = doc.layers.add();
        layer.name = nameLayer;
        layer.visible = true;
        layer.locked = false;
    }
    return layer;
};
