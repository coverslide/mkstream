var inherits = require('inherits')
var Stream = require('stream')

module.exports = makeStream

function makeStream(target){
  inherits(target, Stream)
}
