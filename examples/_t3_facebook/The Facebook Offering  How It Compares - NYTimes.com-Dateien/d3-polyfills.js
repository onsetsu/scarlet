// Terrible horrible D3 polyfills.
(function() {

  var s = window.CSSStyleDeclaration;
  if (s && !s.prototype.getProperty && s.getAttribute) {
    s.prototype.getProperty = function(a) {
        return this.getAttribute(a);
    };
    s.prototype.setProperty = function(a,b) {
        return this.setAttribute(a,b);
    };
    s.prototype.removeProperty = function(a) {
        return this.removeAttribute(a);
    };
  }

  // Add ECMA262-5 Array methods if not supported natively
  //
  if (!('indexOf' in Array.prototype)) {
      Array.prototype.indexOf= function(find, i /*opt*/) {
          if (i===undefined) i= 0;
          if (i<0) i+= this.length;
          if (i<0) i= 0;
          for (var n= this.length; i<n; i++)
              if (i in this && this[i]===find)
                  return i;
          return -1;
      };
  }
  if (!('lastIndexOf' in Array.prototype)) {
      Array.prototype.lastIndexOf= function(find, i /*opt*/) {
          if (i===undefined) i= this.length-1;
          if (i<0) i+= this.length;
          if (i>this.length-1) i= this.length-1;
          for (i++; i-->0;) /* i++ because from-argument is sadly inclusive */
              if (i in this && this[i]===find)
                  return i;
          return -1;
      };
  }
  if (!('forEach' in Array.prototype)) {
      Array.prototype.forEach= function(action, that /*opt*/) {
          for (var i= 0, n= this.length; i<n; i++)
              if (i in this)
                  action.call(that, this[i], i, this);
      };
  }
  if (!('map' in Array.prototype)) {
      Array.prototype.map= function(mapper, that /*opt*/) {
          var other= new Array(this.length);
          for (var i= 0, n= this.length; i<n; i++)
              if (i in this)
                  other[i]= mapper.call(that, this[i], i, this);
          return other;
      };
  }
  if (!('filter' in Array.prototype)) {
      Array.prototype.filter= function(filter, that /*opt*/) {
          var other= [], v;
          for (var i=0, n= this.length; i<n; i++)
              if (i in this && filter.call(that, v= this[i], i, this))
                  other.push(v);
          return other;
      };
  }
  if (!('every' in Array.prototype)) {
      Array.prototype.every= function(tester, that /*opt*/) {
          for (var i= 0, n= this.length; i<n; i++)
              if (i in this && !tester.call(that, this[i], i, this))
                  return false;
          return true;
      };
  }
  if (!('some' in Array.prototype)) {
      Array.prototype.some= function(tester, that /*opt*/) {
          for (var i= 0, n= this.length; i<n; i++)
              if (i in this && tester.call(that, this[i], i, this))
                  return true;
          return false;
      };
  }

  if (!Element.prototype.addEventListener) Element.prototype.addEventListener = function(type, listener, capture) {
    this.attachEvent(type, listener);
  };

})();


// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
    || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
      timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
})();