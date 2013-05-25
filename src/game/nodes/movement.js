define([
    'ash', 'game/components/position', 'components/Motion'
], function (Ash, Position, Motion) {
    var Movement = Ash.Node.extend({
        position: null,
        motion: null,
        types: {
            position : Position,
            motion : Motion
        },

        constructor: function () { }
    });

    return Movement;
});
