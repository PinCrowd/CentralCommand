Pincrowd.View.Kiosk = Backbone.View.extend({

    games: null,

    //respond to events to begin a game
    events: {

    },

    initialize: function(options) {

        //init welcome screen
        this.splash  = new Pincrowd.View.Splash({'container': this.$el});

        this.checkForGames();

    },

    renderMatch: function(options) {

    },

    checkForGames: function(options) {
        var _this = this;
        var checkTimeout = window.setTimeout(function(){
            $.ajax({
                type: 'GET',
                url: '/data/centralCommand.json',
                success: function(data){
                    _this.setupGames(data);
                },
                error: function(xhr, type){
                    console.log('check for games ajax error');
                    console.log(xhr);
                    console.log(type);
                    _this.checkForGames();
                }
            });
        }, 1000);
    },

    setupGames: function(options) {
        _this = this;
        console.log('setup match');
        console.log(options);

        if(options.hasOwnProperty('newMatch') && options.newMatch){

            $.ajax({
                type: 'GET',
                url: '/data/ln17.json',
                success: function(data){
                    _this.games = new Pincrowd.Collection.Games(data.games);
                    console.log(_this.games.toJSON());
                },
                error: function(xhr, type){
                    console.log('setup games ajax error');
                    console.log(xhr);
                    console.log(type);
                    _this.checkForGames();
                }
            });

        }
    }

});

var app = new Pincrowd.View.Kiosk({'el': $('#app')});