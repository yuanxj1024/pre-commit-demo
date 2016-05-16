/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-05-16 12:15:14
 * @version $Id$
 */

(function(){
  'use strict';

  console.log('Hello world');

  var View = function(ops){

    this.init(ops);
  };

  View.prototype.init = function(ops) {
    console.log('init');

    this.changeTitle();
  };

  View.prototype.changeTitle = function(){
    var ele = document.getElementById('title');
    ele.innerText = 'Hello pre-commit';
  };

  new View();

})();