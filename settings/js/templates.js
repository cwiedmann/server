(function() {
  var template = Handlebars.template, templates = OC.Settings.Templates = OC.Settings.Templates || {};
templates['authtoken'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "<a class=\"icon icon-more\"/>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "			<li><span class=\"menuitem\">\n				<input class=\"filesystem checkbox\" type=\"checkbox\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "_filesystem\" "
    + ((stack1 = helpers["if"].call(depth0,((stack1 = (depth0 != null ? depth0.scope : depth0)) != null ? stack1.filesystem : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\n				<label for=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "_filesystem\">' + t('settings', 'Allow filesystem access') </label><br/>\n			</span></li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "checked";
},"6":function(container,depth0,helpers,partials,data) {
    return "			<li>\n				<a class=\"icon icon-delete has-tooltip\" title=\"' + t('settings', 'Disconnect') \">' + t('settings', 'Revoke') +'</a>\n			</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<tr data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n	<td class=\"client\">\n	    <div class=\""
    + alias3(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\" />\n	</td>\n	<td class=\"has-tooltip\" title=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n		<span class=\"token-name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n	</td>\n	<td>\n		<span class=\"last-activity has-tooltip\" title=\""
    + alias3(((helper = (helper = helpers.lastActivityTime || (depth0 != null ? depth0.lastActivityTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastActivityTime","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.lastActivity || (depth0 != null ? depth0.lastActivity : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastActivity","hash":{},"data":data}) : helper)))
    + "</span></td>\n	<td class=\"more\">\n		"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.showMore : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		<div class=\"popovermenu menu\">\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.canScope : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.canDelete : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</td>\n<tr>\n";
},"useData":true});
})();