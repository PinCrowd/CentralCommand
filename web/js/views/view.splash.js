Pincrowd.View.Splash = Backbone.View.extend({
    tagName: 'div',
    attributes: {
        'id': 'splash'
    },

    events: {
        'tap': 'hide',
        'click': 'hide'
    },

    initialize: function(options) {
        this.$container = options.container;
        this.render();
    },

    render: function(options) {
        this.$container.append(this.$el);
    },

    hide: function() {
        console.log('hide');
        this.$container.find('#'+this.attributes.id).remove();
    }

});