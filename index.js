var Stream = require('stream')

module.exports = makeStream

makeStream.Stream = Stream
function makeStream(target){
  target.prototype = Object.create(Stream.prototype, {constructor: {value: target}})
}

//streams2 methods added for convenience so I don't have to re-require them
//remember to call the constructor on all instantiated objects
makeStream.Readable = Stream.Readable
makeStream.makeReadable = function(target, options){
  target.prototype = Object.create(Stream.Readable.prototype, {constructor: {value: target}})
}

makeStream.Writable = Stream.Writable
makeStream.makeWritable = function(target, options){
  target.prototype = Object.create(Stream.Writable.prototype, {constructor: {value: target}})
}

makeStream.Duplex = Stream.Duplex
makeStream.makeDuplex = function(target, options){
  target.prototype = Object.create(Stream.Duplex.prototype, {constructor: {value: target}})
}

makeStream.Transform = Stream.Transform
makeStream.makeTransform = function(target, options){
  target.prototype = Object.create(Stream.Transform.prototype, {constructor: {value: target}})
}
