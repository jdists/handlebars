# @jdists/handlebars

handlebars as jdists processor

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

* @see [jdists](https://github.com/zswang/jdists)

* @see [handlebars](https://github.com/wycats/handlebars.js)

## Example

```html
<!--data>
kids:
  - name: Jimmy
    age: '12'
  - name: Sally
    age: '4'
</data-->

<!--jdists encoding="handlebars" data="?data"-->
<ul>
  {{#kids}}
  <li>{{name}} is {{age}}</li>
  {{/kids}}
</ul>
<!--/jdists-->

<!--extend>
require('handlebars-helpers')({
  handlebars: handlebars
})
</extend-->

<!--handlebars data="?data" extend="?extend"-->
<ul>
  {{#kids}}
  <li>{{name}} is {{toFixed age 2}}</li>
  {{/kids}}
</ul>
<!--/handlebars-->
```

## License

MIT © [zswang](http://weibo.com/zswang)

[npm-url]: https://badge.fury.io/js/%40jdists%2Fhandlebars
[npm-image]: https://badge.fury.io/js/%40jdists%2Fhandlebars.svg
[travis-url]: https://travis-ci.org/jdists/handlebars
[travis-image]: https://travis-ci.org/jdists/handlebars.svg?branch=master
[coverage-url]: https://coveralls.io/github/jdists/handlebars?branch=master
[coverage-image]: https://coveralls.io/repos/jdists/handlebars/badge.svg?branch=master&service=github