var Stream = require('stream')
var inherits = require('util').inherits

module.exports = makeStream

function makeStream(target){
  inherits(Stream, target)
}

//streams2 methods added for convenience so I don't have to re-require them
//remember to call the constructor on all instantiated objects
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
