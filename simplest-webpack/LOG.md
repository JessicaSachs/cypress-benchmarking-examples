# LOG

This log will be updated commit-by-commit to allow you to time travel through the debugging process

-----

Test Status: red

```
Error
Timed out after 4000ms. The done() callback was never invoked!
View stack trace
Error: Timed out after `4000ms`. The `done()` callback was never invoked!
    at http://localhost:50321/__cypress/runner/cypress_runner.js:148042:25
```

Cypress Errors (first load):

```js
bootstrap:105 Uncaught (in promise) ChunkLoadError: Loading chunk 0 failed.
(missing: http://localhost:51587/__cypress/iframes/component/0.foo.spec.js)
    at Function.requireEnsure [as e] (http://localhost:51587/__cypress/tests?p=src/foo.spec.js-910:106:26)
    at Context.<anonymous> (http://localhost:51587/__cypress/tests?p=src/foo.spec.js-910:213:25)
```

Cypress Errors (hmr): 

```js
bootstrap:105 Uncaught (in promise) ChunkLoadError: Loading chunk 0 failed.
(missing: http://localhost:50321/__cypress/iframes/component/0.foo.spec.js)
    at Function.requireEnsure [as e] (http://localhost:50321/__cypress/tests?p=src/foo.spec.js-930:106:26)
    at Context.<anonymous> (http://localhost:50321/__cypress/tests?p=src/foo.spec.js-930:213:25)
requireEnsure @ bootstrap:104
(anonymous) @ foo.spec.js:4
```

-----

Test Status: green
Cypress Errors (first load):

```js
cypress_runner.js:141675 Uncaught TypeError: Cannot read property 'stop' of null
    at $Cypress.stop (cypress_runner.js:141675)
    at Object._reRun (cypress_runner.js:171464)
    at Socket.rerun (cypress_runner.js:171183)
    at Socket.../socket/node_modules/component-emitter/index.js.Emitter.emit (cypress_runner.js:159478)
    at Socket.../socket/node_modules/socket.io-client/lib/socket.js.Socket.onevent (cypress_runner.js:166020)
    at Socket.../socket/node_modules/socket.io-client/lib/socket.js.Socket.onpacket (cypress_runner.js:165978)
    at Manager.<anonymous> (cypress_runner.js:159336)
    at Manager.../socket/node_modules/component-emitter/index.js.Emitter.emit (cypress_runner.js:159478)
    at Manager.../socket/node_modules/socket.io-client/lib/manager.js.Manager.ondecoded (cypress_runner.js:165476)
    at Decoder.<anonymous> (cypress_runner.js:159336)
    at Decoder.../socket/node_modules/component-emitter/index.js.Emitter.emit (cypress_runner.js:159478)
    at Decoder.../socket/node_modules/socket.io-circular-parser/index.js.Decoder.add (cypress_runner.js:164124)
    at Manager.../socket/node_modules/socket.io-client/lib/manager.js.Manager.ondata (cypress_runner.js:165466)
    at Socket.<anonymous> (cypress_runner.js:159336)
    at Socket.../socket/node_modules/component-emitter/index.js.Emitter.emit (cypress_runner.js:159478)
    at Socket.../socket/node_modules/engine.io-client/lib/socket.js.Socket.onPacket (cypress_runner.js:160022)
```


Cypress Errors (hmr): none


-----

Test Status: green
Cypress Errors: none


