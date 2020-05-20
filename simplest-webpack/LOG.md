# LOG

This log will be updated commit-by-commit to allow you to time travel through the debugging process

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


