Pincrowd.View.Kiosk = Backbone.View.extend({
    laneId: "ln17",
    gameSet: null,
    games: null,
    currentGame: null,
    gameOrder: [],
    gameViews: {},
    $games: $('#games'),
    editPlayerView: null,
    editFrameView: null,

    //respond to events to begin a game
    events: {

    },

    initialize: function(options) {

        //init welcome screen
        this.splash  = new Pincrowd.View.Splash({'container': this.$el});

        // init games collection
        this.games = new Pincrowd.Collection.Games();

        Pincrowd.EventHub = _.clone(Backbone.Events);


        window.eventTick = window.setInterval(function(){
            Pincrowd.EventHub.trigger('tick');
        }, 5000);


        //this.pollCentralCommand();
        this.fetchMatch();

    },

    fetchMatch: function(options) {
        var _this = this;
        var myData = {
                        "cmd":"newMatch",
                        "data":{
                            "laneId":"5119047177e9deac0b000001",
                            "gameCount":2
                        }
                    };
        $.ajax({
            type: 'post',
            url: '/app_dev.php/endpoint/',
            processData: true,
            data: JSON.stringify(myData),
            dataType: "json",
            success: function(data){
                _this.games.reset(data.games);

                _.each(data.games, function(game){
                    _this.gameOrder.push(game.id);
                    if(game.active){
                        _this.currentGame = game.id;
                    }
                });

                console.log(_this.gameOrder);
                console.log(_this.currentGame);

                console.log(_this.games.toJSON());

                _this.createGames();



            },
            error: function(xhr, type){
                console.log('check for games ajax error');
                console.log(xhr);
                console.log(type);
                //_this.pollCentralCommand();
            }
        });
    },





















    getCurrentGame: function() {
        return this.currentGame;
    },

    createGames: function(options) {
        var _this = this;
        this.games.each(function(game, key, list){
            console.log('create games ' + game.id);
            _this.gameViews[game.id] = new Pincrowd.View.Game({'model':     game,
                                                                'id':       game.id,
                                                                'container': _this.$games,
                                                                'kiosk':    _this});
        });

        this.gameViews[this.currentGame].isCurrentGame(true);

    },














    pollCentralCommand: function(options) {
        var _this = this;
        var checkTimeout = window.setTimeout(function(){
            $.ajax({
                type: 'GET',
                url: '/data/centralCommand.json',
                success: function(data){
                    _this.fetchGames(data);
                },
                error: function(xhr, type){
                    console.log('check for games ajax error');
                    console.log(xhr);
                    console.log(type);
                    _this.pollCentralCommand();
                }
            });
        }, 1000);
    },

    fetchGames: function(options) {
        _this = this;
        console.log('setup match');
        console.log(options);

        if (options.hasOwnProperty('newMatch') && options.newMatch
            && options.hasOwnProperty('games') && options.games != _this.gameSet) {

            _this.gameSet = options.games;
            var timestamp = new Date().getTime();;

            $.ajax({
                type: 'GET',
                url: '/data/' + _this.gameSet + '.json?' + timestamp,
                success: function(data){
                    console.log('successfully fetched new games');
                    _this.games.reset(data.games);
                    _this.gameOrder = data.gameOrder;
                    _this.currentGame = data.currentGame;

                    console.log(_this.games.toJSON());
                    _this.createGames();
                },
                error: function(xhr, type){
                    console.log('setup games ajax error');
                    console.log(xhr);
                    console.log(type);
                    _this.pollCentralCommand();
                }
            });

        } else {
            _this.pollCentralCommand();
        }
    },

    nextPlayer: function(){
        var gameIndex = 0;
        var gameOrderLength = this.gameOrder.length;
        for (var i = 0; i < gameOrderLength; i++) {
            if(this.gameOrder[i] == this.currentGame){
                gameIndex = ((i+1) == gameOrderLength) ? 0 : (i+1);
                break;
            }
        }

        console.log(this.currentGame);
        console.log(this.gameOrder[gameIndex]);

        this.gameViews[this.currentGame].isCurrentGame(false);

        this.currentGame = this.gameOrder[gameIndex];
        this.gameViews[this.currentGame].isCurrentGame(true);

    },

    removeGame: function(model) {
        var id = model.id;
        if(this.currentGame == id){
            this.nextPlayer();
        }
        // remove rendering
        this.gameViews[id].remove();

        // delete view
        delete this.gameViews[id];

        // delete model
        this.games.remove(id);

        for(var i = 0; i < this.gameOrder.length; i++) {
            if (this.gameOrder[i] == id) {
                this.gameOrder.splice(i, 1);
            }
        }
    },

    editPlayer: function(options) {
        if (this.editPlayerView !== null) {
            this.editPlayerView.remove();
        }
        this.editPlayerView = new Pincrowd.View.EditPlayer({'model': options.model});
    },

    editFrame: function(data) {
        if (this.editFrameView !== null) {
            this.editFrameView.remove();
        }
        this.editFrameView = new Pincrowd.View.EditFrame(data);
    },

});

var app = new Pincrowd.View.Kiosk({'el': $('#app')});