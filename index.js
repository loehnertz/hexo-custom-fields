/**
 * "hexo-custom-fields"
 * Made by Jakob Löhnertz (www.jakob.codes)
 *
 * Syntax: <%- custom_field('name_of_the_field') %>
 */

var fs = require('fs');
var path = require('path');

hexo.extend.helper.register('custom_field', function(args) {
    return args
});
