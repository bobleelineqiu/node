/**
 * Created by xiaxia on 15/8/2.
 */
function Event(){
    this._events = {};
}

Event.prototype.on = function (eventName,listener) {
    if(this._events[eventName]){

    }else{
        this._events[eventName] = [listener];
    }
}

Event.prototype.emit = function (eventName) {
    var count = this._events[eventName];
    var args = Array.prototype.slice(arguments,1);
    for(var i=0;i<count.length;i++){
        count[i].apply(this,args);
    }
}