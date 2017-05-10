/**
 * "hexo-custom-fields"
 * Made by Jakob Löhnertz (www.jakob.codes)
 *
 * Syntax: <%- custom_field('name_of_the_field') %>
 */

var fs = require('fs');
var path = require('path');
var _ = require('lodash');

hexo.extend.helper.register('custom_field', function(title, field) {
    var data = hexo["database"]["_models"]["Page"]["data"];

    var hit = _.find(data, ['title', title])[field];

    return hit;
});
