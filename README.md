meteor-kizzy [![Build Status](https://travis-ci.org/zhouzhuojie/meteor-kizzy.svg)](https://travis-ci.org/zhouzhuojie/meteor-kizzy)
================

Kizzy for Meteor. Kizzy is a light-weight, cross-browser, JavaScript local storage utility. It leverages the HTML5 localStorage API when available, as well as Internet Explorer's persistent XML store — wrapped up in a easy to use, memcached-like interface. When neither of these features are available (unlikely), it falls back to an in-browser object store.


```
meteor add rexzh0u:kizzy
```


Basic usage
-------------

It looks like this

``` js
var cache = kizzy('users')
var agent = cache.get('Agent')
if (agent) {
  alert('Welcome back ' + agent.name)
} else {
  cache.set('Agent', {
    name: 'Agent Diaz'
  })
}
```

More
-----------
Official Documentation for [kizzy](https://github.com/ded/Kizzy).

LICENSE
-----------
MIT
