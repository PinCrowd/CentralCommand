(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_edit_frame'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "wide";}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"throw-input three\">\n            <label for=\"edit-throw-three\" class=\"throw-title\">Throw 3</label>\n            <input id=\"edit-throw-three\" type=\"text\" value=\"";
  foundHelper = helpers.frame;
  stack1 = foundHelper || depth0.frame;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.three);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frame.throw.three.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" maxlength=\"1\" />\n        </div>\n        ";
  return buffer;}

  buffer += "<div id=\"edit-frame\" class=\"modal\">\n    <div class=\"title\">";
  foundHelper = helpers.playerName;
  stack1 = foundHelper || depth0.playerName;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "playerName", { hash: {} }); }
  buffer += escapeExpression(stack1) + " - Edit Frame ";
  foundHelper = helpers.frameNum;
  stack1 = foundHelper || depth0.frameNum;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frameNum", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n    <div class=\"throw-inputs ";
  foundHelper = helpers.isTen;
  stack1 = foundHelper || depth0.isTen;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        <div class=\"throw-input one\">\n            <label for=\"edit-throw-one\" class=\"throw-title\">Throw 1</label>\n            <input id=\"edit-throw-one\" type=\"text\" value=\"";
  foundHelper = helpers.frame;
  stack1 = foundHelper || depth0.frame;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.one);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frame.throw.one.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" maxlength=\"1\" />\n        </div>\n        <div class=\"throw-input two\">\n            <label for=\"edit-throw-two\" class=\"throw-title\">Throw 2</label>\n            <input id=\"edit-throw-two\" type=\"text\" value=\"";
  foundHelper = helpers.frame;
  stack1 = foundHelper || depth0.frame;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.two);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frame.throw.two.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" maxlength=\"1\" />\n        </div>\n        ";
  foundHelper = helpers.isTen;
  stack1 = foundHelper || depth0.isTen;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"save-control\">\n        <span class=\"save\">SAVE</span>\n        <span class=\"cancel\">CANCEL</span>\n    </div>\n    <div class=\"close\">CLOSE</div>\n</div>";
  return buffer;});
})();