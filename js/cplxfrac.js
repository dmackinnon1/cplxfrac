
 /*
 *CPoint represents a point in the complex plane.
 */
class CPoint { 
	constructor(a,  b){
		this.xvalue = a;
		this.yvalue = b;
	} 
	
	sum(p){  
		return new CPoint(this.xvalue + p.xvalue, this.yvalue + p.yvalue);
	}
	 
	diff(p){  
		return new CPoint(this.xvalue - p.xvalue, this.yvalue - p.yvalue);
	}
		 
	absolute() {
		var x = this.xvalue;
		var y = this.yvalue;
		if (x <0) x = -1 *x;
		if (y <0) y = -1 *y;
		return new CPoint(x,y);
	}
	 
	prod(p){
		var newx = this.xvalue*(p.xvalue) - this.yvalue*(p.yvalue);
		var newy = this.xvalue*(p.yvalue) + this.yvalue*(p.xvalue); 
		return new CPoint(newx, newy);
	}
	 
	squared(){
		return this.prod(this);
	}
	 
	cubed(){
		return this.squared().prod(this);
	}
	
	quad(){
		return this.squared().prod(this).prod(this);
	}
	
	quint(){
		return this.quad().prod(this);
	}
	 
	root(){
		return new CPoint(Math.sqrt(this.xvalue), Math.sqrt(this.yvalue));
	}
	
	magnit() {
		return Math.sqrt(this.xvalue*this.xvalue + (this.yvalue*this.yvalue));
	}
	 
	signedRoot(){
		var xsign = 1;
		var ysign = 1;
		if (this.xvalue < 0) xsign = -1;
		if (this.yvalue < 0) ysign = -1;
		return new CPoint(Math.sqrt(this.xvalue)*xsign, Math.sqrt(this.yvalue)*ysign);
	}
	 
	scalarProduct(d){
		return new CPoint(d * this.xvalue, d * this.yvalue);
	}
	 
	conjugate() {
		return new CPoint(this.xvalue, -1 * this.yvalue);	 
	}		
	toString() {
		return "" + this.xvalue + " + " + this.yvalue +"i";
	}
};

class Map {
	constructor(arrow, initial) {
		this.arrow = arrow;
		this.initial = initial;
	}
	
	apply(x) {
		return this.arrow(x,this.initial);
	}
	
	iterate(value, limit, bound) {
		var level = 0;
	    var current = value;
		for(var i=0; i< limit; i++){
	      current = this.apply(current);    
	      if(current.magnit()>bound) break;
	      level++;
	    }
	    return level;
	}
	
}
/*
 * TODO: come up with a better method.
 */ 
function colorChooser(level) {
	var colors = ['#ffffff','#d6d6c2','#b8b894','#999966','#6b6b47','#3d3d29','#0f0f0a'];
	//var colors = ['white','light-grey','grey','black'];
	var clevel = level % colors.length;
	return colors[clevel];
}

var mandelbrot = function(x,c) { return x.squared().sum(c); };
var one = new CPoint(1,0);
var mandelbrotMap = new Map(mandelbrot, one);

/**
* utilities
*/

function randomRange(greaterThan, lessThan){
	var shifted = randomInt(lessThan - greaterThan);
	return lessThan - shifted; 
};

function randomInt(lessThan){
	var selection = Math.floor(Math.random()*(lessThan));
	return selection;
};

function randomCP(range) {
		return new CPoint(randomRange(-1*range,range), randomRange(-1*range,range));
};



