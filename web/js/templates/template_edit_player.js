(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_edit_player'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "\n    <div class=\"skip-player\">Skip Player</div>\n    ";}

  buffer += "<div id=\"edit-player\" class=\"modal\">\n    <div class=\"edit-name\">\n        <label for=\"edit-player-name\">Edit Name:</label><br />\n        <input id=\"edit-player-name\" type=\"text\" value=\"";
  foundHelper = helpers.player;
  stack1 = foundHelper || depth0.player;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.name);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "player.name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" /><span class=\"save\">SAVE</span>\n    </div>\n    ";
  foundHelper = helpers.isCurrentGame;
  stack1 = foundHelper || depth0.isCurrentGame;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"remove-player\">Remove Player</div>\n    <div class=\"close\">CLOSE</div>\n</div>";
  return buffer;});
})();