$(document).ready(function() {
    'use strict';
    console.log('main.js loaded');
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    ////////////draw Circle////////////////////
    var c = Shape.Circle(200, 200, 50);
    c.fillColor = 'green';
    var tool = new Tool();
    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    };
    ///////////////////////////////////////////
    paper.view.draw();
});