(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_edit_frame'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "wide";}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"throw-input three\">\n            <label for=\"edit-throw-three\" class=\"throw-title\">Throw 3</label>\n            <input id=\"edit-throw-three\" type=\"text\" value=\"";
  stack1 = depth0.frame;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw3;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" maxlength=\"1\" />\n        </div>\n        ";
  return buffer;}

  buffer += "<div id=\"edit-frame\" class=\"modal\">\n    <div class=\"title\">";
  foundHelper = helpers.playerName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.playerName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " - Edit Frame ";
  foundHelper = helpers.frameNum;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.frameNum; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n    <div class=\"throw-inputs ";
  stack1 = depth0.isTen;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        <div class=\"throw-input one\">\n            <label for=\"edit-throw-one\" class=\"throw-title\">Throw 1</label>\n            <input id=\"edit-throw-one\" type=\"text\" value=\"";
  stack1 = depth0.frame;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw1;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" maxlength=\"1\" />\n        </div>\n        <div class=\"throw-input two\">\n            <label for=\"edit-throw-two\" class=\"throw-title\">Throw 2</label>\n            <input id=\"edit-throw-two\" type=\"text\" value=\"";
  stack1 = depth0.frame;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw2;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" maxlength=\"1\" />\n        </div>\n        ";
  stack1 = depth0.isTen;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"save-control\">\n        <span class=\"save\">SAVE</span>\n        <span class=\"cancel\">CANCEL</span>\n    </div>\n    <div class=\"close\">CLOSE</div>\n</div>";
  return buffer;});
})();