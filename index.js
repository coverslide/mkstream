var Stream = require('stream')
var inherits = require('util').inherits

module.exports = makeStream

function makeStream(target){
  inherits(target, Stream)
}
