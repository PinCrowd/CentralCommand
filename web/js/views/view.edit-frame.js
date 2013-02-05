Pincrowd.View.EditFrame = Backbone.View.extend({
    template: Handlebars.templates.template_edit_frame,
    frameNum: null,
    $frame: null,

    events: {
        "tap .close, cancel": "remove",
        "click .close, .cancel": "remove",
        "tap .save": "save",
        "click .save": "save"
    },

    initialize: function(options) {
        this.frameNum = options.hasOwnProperty('frameNum') ? options.frameNum : this.frameNum;
        this.$frame = options.hasOwnProperty('frameEl') ? options.frameEl : this.$frame;
        this.render();
    },

    render: function(options) {
        var frames = this.model.get('frames');
        var frame = frames[this.frameNum];
        var data = {
            'playerName': this.model.get('player').name,
            'frameNum': this.frameNum,
            'frame': frame,
            'isTen': (this.frameNum == 10)
        };
        this.$el = $(this.template(data));
        $('body').append(this.$el);
    },

    save: function(options) {
        var frames = this.model.get('frames');
        if (frames[this.frameNum] === undefined) {
            frames[this.frameNum] = {
                'score': 0,
                'throw': {
                    'one': {'value': '', 'pinfall': '', 'edited': 0},
                    'two': {'value': '', 'pinfall': '', 'edited': 0}
                },
                'total': 0
            };

            if(this.frameNum == 10){
                frames[this.frameNum]["throw"].three = {'value': '', 'pinfall': '', 'edited': 0};
            }
        }

        frames[this.frameNum]["throw"].one.value  = parseInt(this.$el.find('#edit-throw-one').val(), 10);
        frames[this.frameNum]["throw"].one.edited = 1;
        frames[this.frameNum]["throw"].two.value  = parseInt(this.$el.find('#edit-throw-two').val(), 10);
        frames[this.frameNum]["throw"].two.edited = 1;

        var sum = frames[this.frameNum]["throw"].one.value + frames[this.frameNum]["throw"].two.value;

        if (this.frameNum == 10) {
            frames[this.frameNum]["throw"].three.value = parseInt(this.$el.find('#edit-throw-three').val(), 10);
            frames[this.frameNum]["throw"].three.edited = 1;
            sum += frames[this.frameNum]["throw"].three.value;
        }

        var oldTotal = frames[this.frameNum].total;
        frames[this.frameNum].total = sum;
        frames[this.frameNum].score = frames[this.frameNum].score - oldTotal + sum;
        frames[this.frameNum].edited = 1;

        this.model.setFrames(frames);
        this.remove();
    }





});