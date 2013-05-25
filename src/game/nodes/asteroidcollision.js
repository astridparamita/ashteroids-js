define([
    'ash', 'components/Asteroid', 'game/components/position'
], function (Ash, Asteroid, Position) {
    var AsteroidCollision = Ash.Node.extend({
        asteroid: null,
        position: null,

        ///TODO come back to this inelegant bit
        types: {
            asteroid : Asteroid,
            position : Position
        },

        constructor: function () { }
    });

    return AsteroidCollision;
});
