var Component_Actions = function($container) {
    this.$container = $container;
    this.setValues();
    this.setEvents();
};

Component_Actions.prototype.setValues = function() {
    this.$buttons = this.$container.find('button');
    console.log(this.$buttons);
};

Component_Actions.prototype.setEvents = function() {
    _t = this;
}



module.exports = Component_Actions;
