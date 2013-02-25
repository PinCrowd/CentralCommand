Pincrowd.View.Game = Backbone.View.extend({
    template: Handlebars.templates.template_game,
    $container: undefined,
    $el: undefined,
    player: null,
    frames: null,
    editView: null,
    kiosk: null,


    events: {
        "tap .player": "editPlayer",
        "click .player": "editPlayer",
        "tap .frame": "editFrame",
        "click .frame": "editFrame"
    },

    initialize: function(options) {
        console.log('view ' + this.id);
        this.$el = undefined;
        this.$container = options.hasOwnProperty('container') ? options.container : this.$container;
        this.kiosk = options.hasOwnProperty('kiosk') ? options.kiosk : null;

        this.model.on("change:username", this.updateName, this);
        this.model.on("change:frames", this.renderGame, this);

        this.renderGame();
    },

    renderGame: function(options) {
        if (this.$el === undefined) {
            console.log('render game');
            this.$el = $(this.template(this.model.toJSON()));
            this.$container.append(this.$el);
        } else {
            console.log('refresh game ' + this.model.id);
            console.log(this.model);
            this.$el.html($(this.template(this.model.toJSON())).html());
        }

    },

    editPlayer: function(options) {
        this.kiosk.editPlayer({'model': this.model});
    },

    updateName: function(options) {
        console.log(this.model.get('player'));
        this.$el.find(".player .name").html(this.model.get('player').username);
    },

    isCurrentGame: function(isCurrent) {
        if(isCurrent) {
            this.$el.addClass('currentGame');
        } else {
            this.$el.removeClass('currentGame');
        }
    },

    editFrame: function(event){
        var $frame = $(event.currentTarget);
        var frameNum = $frame.data('frame');
        console.log('edit frame: ' + frameNum);
        if (frameNum <= this.model.get('currentFrame')) {
            this.kiosk.editFrame({'frameNum': frameNum, 'frameEl': $frame, 'model': this.model});
        }
    }

});