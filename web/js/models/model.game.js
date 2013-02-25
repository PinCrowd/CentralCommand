Pincrowd.Model.Game = Backbone.Model.extend({
    syncInterval: null,
    defaults: {
        currentFrame: null
    },

    initialize: function(attrs) {
        _this = this;
        //this.frames = (this.frames === null) ? this.initFrames() : this.frames;

        _.each(attrs.frames, function(frame, key, list){
            if (_this.get('currentFrame') === null && frame.score === null) {
                console.log(key);
                _this.set('currentFrame', key);
            }
        });

        this.listenTo(Pincrowd.EventHub, 'tick', this.refreshGame);
    },

    refreshGame: function(){
        console.log(this.get('id'));
        var _this = this;
        var myData = {
            "cmd":"getGame",
            "data": {
                        "gameId": this.id
                    }
            };
        $.ajax({
            type: 'post',
            url: '/app_dev.php/endpoint/',
            processData: true,
            data: JSON.stringify(myData),
            dataType: "json",
            success: function(data){
                _this.set(data);
            },
            error: function(xhr, type){
                console.log('model interval error');
            }
        });
    },

    setUsername: function(name) {
        var player = this.get('player');
        player.username = name;
        this.set('player', player);
        this.trigger('change:username', name);
    },

    setFrames: function(frames) {
        this.set('frames', frames);
        this.trigger('change:frames', frames);
    }
});