/**
 * Created by xiaxia on 15/8/2.
 */
var EventEmitter = require('events').EventEmitter;
var util = require('util');
function Teacher(name){
    this.name = name;
}
util.inherits(Teacher,EventEmitter);