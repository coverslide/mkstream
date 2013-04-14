var Stream = require('stream')
var inherits = require('util').inherits

module.exports = makeStream

function makeStream(target){
  inherits(Stream, target)
}

makeStream.Readable = Stream.Readable
makeStream.makeReadable = function(target, options){
  inherits(Stream.Readable, target)
}

makeStream.Writable = Stream.Writable
makeStream.makeWritable = function(target, options){
  inherits(Stream.Writable, target)
}

makeStream.Duplex = Stream.Duplex
makeStream.makeDuplex = function(target, options){
  inherits(Stream.Duplex, target)
}

makeStream.Transform = Stream.Transform
makeStream.makeTransform = function(target, options){
  inherits(Stream.Transform, target)
}
