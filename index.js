/**
 * "hexo-custom-fields"
 * Made by Jakob Löhnertz (www.jakob.codes)
 *
 * Syntax: {% custom_field(name_of_the_field) %}
 */

var fs = require('fs');
var path = require('path');

var extractCustomField = function(args, content) {

};
hexo.extend.tag.register('custom_field', extractCustomField);
