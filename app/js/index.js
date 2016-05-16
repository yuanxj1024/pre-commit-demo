/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-05-16 12:15:14
 * @version $Id$
 */

var View;
var page;

console.log('Hello world');

View = function (ops) {
  this.init(ops);
};

View.prototype.init = function () {
  console.log('init');

  this.changeTitle();
};

View.prototype.changeTitle = function () {
  var ele = document.getElementById('title');
  ele.innerText = 'Hello pre-commit';
};

page = new View();

console.log(page);
