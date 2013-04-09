var Stream = require('stream')

module.exports = makeStream

function makeStream(target, options){
  extend(Stream, target)
  Stream.call(target, options)
}

makeStream.Readable = function(target, options){
  extend(Stream.Readable, target)
  Stream.Readable.call(target, options)
}

makeStream.Writable = function(target, options){
  extend(Stream.Writable, target)
  Stream.Writable.call(target, options)
}

makeStream.Duplex = function(target, options){
  extend(Stream.Duplex, target)
  Stream.Duplex.call(target, options)
}

makeStream.Transform = function(target, options){
  extend(Stream.Transform, target)
  Stream.Transform.call(target, options)
}

// non-destructively extend from base class
function extend(src, target){
  Object.keys(src.prototype).forEach(function(prop){
    if(!target.prototype[prop])
      target.prototype[prop] = src.prototype[prop]
  })
}
