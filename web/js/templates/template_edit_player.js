(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_edit_player'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n    <div class=\"skip-player\">Skip Player</div>\n    ";}

  buffer += "<div id=\"edit-player\" class=\"modal\">\n    <div class=\"edit-name\">\n        <label for=\"edit-player-name\">Edit Name:</label><br />\n        <input id=\"edit-player-name\" type=\"text\" value=\"";
  stack1 = depth0.player;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" /><span class=\"save\">SAVE</span>\n    </div>\n    ";
  stack1 = depth0.isCurrentGame;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"remove-player\">Remove Player</div>\n    <div class=\"close\">CLOSE</div>\n</div>";
  return buffer;});
})();