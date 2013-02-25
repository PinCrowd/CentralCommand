Pincrowd.View.EditFrame = Backbone.View.extend({
    template: Handlebars.templates.template_edit_frame,
    frameNum: null,
    $frame: null,
    throwOneAjax: {},
    throwTwoAjax: {},
    throwThreeAjax: {},

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
            'playerName': this.model.get('player').username,
            'frameNum': this.frameNum,
            'frame': frame,
            'isTen': (this.frameNum == 10)
        };
        this.$el = $(this.template(data));
        $('body').append(this.$el);
    },

    save: function(options) {
        var _this = this;
        var frames = this.model.get('frames');

        function myData() {
            return {
                "cmd":"editScore",
                "data": {
                            "gameId": _this.model.id,
                            "frame": _this.frameNum,
                            "throw": 1,
                            "score": 0
                        }
            }
        };

        function ajaxDefault() {
            return {
                type: 'post',
                url: '/app_dev.php/endpoint/',
                processData: true,
                data: JSON.stringify(myData),
                dataType: "json",
                success: function(data){
                    // nothin
                },
                error: function(xhr, type){
                    console.log('frame edit error');
                }
            }
        };

        // Throw 1
        var throwOneData = myData();
        throwOneData.data.score = parseInt(this.$el.find('#edit-throw-one').val(), 10);

        this.throwOneAjax = ajaxDefault();
        this.throwOneAjax.data = JSON.stringify(throwOneData);

        //$.ajax(this.throwOneAjax);


        // Throw 2
        var throwTwoData = myData();
        throwTwoData.data.throw = 2;
        throwTwoData.data.score = parseInt(this.$el.find('#edit-throw-two').val(), 10);

        this.throwTwoAjax = ajaxDefault();
        this.throwTwoAjax.data = JSON.stringify(throwTwoData);

        //$.ajax(throwTwoAjax);


        // Throw 3
        if (this.frameNum == 10) {
            var throwThreeData = myData();
            throwThreeData.data.throw = 3;
            throwThreeData.data.score = parseInt(this.$el.find('#edit-throw-three').val(), 10);

            this.throwThreeAjax = ajaxDefault();
            this.throwThreeAjax.data = JSON.stringify(throwThreeData);

            //$.ajax(throwThreeAjax);
        }


        this.throwOneAjax.success = function(data){
            $.ajax(_this.throwTwoAjax);
            //console.log(_this.throwTwoAjax);
        }

        if(this.frameNum == 10){
            this.throwTwoAjax.success = function(data){
                $.ajax(_this.throwThreeAjax);
            }
        }

        $.ajax(this.throwOneAjax);

        this.remove();
    }





});