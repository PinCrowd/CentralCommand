Pincrowd.Model.Game = Backbone.Model.extend({
    defaults: {
        "frames": null,
        "playerId": null
    },

    initialize: function(attrs) {
        this.frames = (this.frames === null) ? this.initFrames() : this.frames;
    },

    initFrames: function() {
        this.frames = [];
        for (var i = 0; i < 10; i++) {
            this.frames.push([]);
        }
    },

    setName: function(name) {
        var player = this.get('player');
        player.name = name;
        this.set("player", player);
        this.trigger("change:name", name);
    },

    setFrames: function(frames) {
        this.set('frames', frames);
        this.trigger('change:frames', frames);
    }
});