# hexo-custom-fields
[![npm](https://img.shields.io/npm/dt/hexo-custom-fields.svg)](https://www.npmjs.com/package/hexo-custom-fields) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Floehnertz%2Fhexo-custom-fields.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Floehnertz%2Fhexo-custom-fields?ref=badge_shield)
   
A Hexo plugin that allows the default Markdown source files to be used as custom fields

## Motive

I am a front-end developer originally. I used many CMS throughout
the years and with many of them it was common to have custom fields.
Which is a functionality that allows the coder to be able to include just snippets
of text or an image path into a template.
I wanted to try a static-site generator more deeply and chose Hexo which I like so far.
It is just missing an easy way to include custom fields directly from
your Markdown source files.
That's exactly what this plugin is trying to solve!

## Installation

NPM
```
npm install --save hexo-custom-fields
```

Yarn
```
yarn add hexo-custom-fields
```

## Usage

Insert the `custom_field()` tag in your templates (in this example with EJS):

```
<%- custom_field('posts|pages, 'title_in_the_front_matter', 'name_of_the_field') %>
```

Argument | Description
-------- | -----------
first     | 'posts' or 'pages' - this determines if the directory 'source/_posts' or 'source/' is used for that field - [Read more about the location in the Hexo documentation](https://hexo.io/docs/writing.html#Layout)
second     |  'title' value in the front-matter of the Markdown source file - [Read more about the front-matter in the Hexo documentation](https://hexo.io/docs/front-matter.html)
third   |  the actual name of the chosen field. Below this table there is another one with possible options.


**One can use the default fields provided by [Hexo](https://hexo.io/docs/variables.html#Page-Variables)**.
**The most important options for the third argument are these:**

Option   | Description
-------- | -----------
'any_field_name'    |  You can use an unlimited amount of custom fields in the front-matter of a source file. You can directly get these with their respective names - *string*
'content'           |  The rendered content of the Markdown file (so everything after the front-matter) - *HTML*
'title'             |  The given title - *string*
'date'              |  The date and time the source file was created at - *formatted date (with timezone)*
'updated'           |  The date and time the source file was last updated at - *formatted date (with timezone)*
'permalink'         |  The full URL of the post or page - *URL*
'_id'               |  The unique ID Hexo assigned to the source file - *string*


**Example:**

Display the custom field *'birthday'*
from the Markdown source file *'front-page'*
in the 'source' directory (which makes it a *'page'*)
[Read more about the location in the Hexo documentation](https://hexo.io/docs/writing.html#Layout)
```
<%- custom_field('pages', 'front-page', 'birthday') %>
```


License
-------

[MIT](LICENSE)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Floehnertz%2Fhexo-custom-fields.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Floehnertz%2Fhexo-custom-fields?ref=badge_large)