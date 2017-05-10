/**
 * "hexo-custom-fields"
 * Made by Jakob Löhnertz (www.jakob.codes)
 *
 * Syntax: <%- custom_field('pages|posts, 'title_in_the_front_matter', 'name_of_the_field') %>
 */

var fs = require('fs');
var path = require('path');
var _ = require('lodash');

hexo.extend.helper.register('custom_field', function(type, title, field) {
    var data = hexo["database"]["_models"];
    if (type === 'posts') {
        data = data["Post"];
    } else if (type === 'pages') {
        data = data["Page"];
    }
    data = data["data"];

    var target = _.find(data, ['title', title]);
    var hit = target[field];

    return hit;
});
