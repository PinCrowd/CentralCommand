Pincrowd.View.EditPlayer = Backbone.View.extend({
    template: Handlebars.templates.template_edit_player,

    events: {
        "tap .close": "remove",
        "click .close": "remove",
        "tap .save": "saveName",
        "click .save": "saveName",
        "tap .skip-player": "skipPlayer",
        "click .skip-player": "skipPlayer",
        "tap .remove-player": "removePlayer",
        "click .remove-player": "removePlayer"
    },

    initialize: function(options) {
        this.render();
    },

    render: function(options) {
        var data = this.model.toJSON();
        data.isCurrentGame = (this.model.id == app.getCurrentGame() ? true : false);
        console.log(data.isCurrentGame);
        console.log(this.model.id);
        console.log(app.getCurrentGame());
        this.$el = $(this.template(data));
        $('body').append(this.$el);
    },

    saveName: function(options) {
        var _this = this;
        var name = this.$el.find('#edit-player-name').val();
        //this.model.setUsername(name);

        var myData = {
            "cmd":"editPlayer",
            "data": {
                        "gameId": _this.model.id,
                        "name": name
                    }
            };
        $.ajax({
            type: 'post',
            url: '/app_dev.php/endpoint/',
            processData: true,
            data: JSON.stringify(myData),
            dataType: "json",
            success: function(data){
                // nothin
            },
            error: function(xhr, type){
                console.log('edit player name error');
            }
        });

        this.remove();
    },

    skipPlayer: function(options) {
        this.remove();
        app.nextPlayer();
    },

    removePlayer: function(options) {
        this.remove();
        app.removeGame(this.model);
    }

});