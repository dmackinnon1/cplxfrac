
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
	
	apply(x,c) {
		return this.arrow(x,this.initial);
	}
	
}


var mandelbrot = function(x,c) { return x.squared().sum(c); };

var one = new CPoint(1,0);
var imaginary = new CPoint(0,1);
var opi = one.sum(imaginary);
console.log("one: " + one);
console.log("i: " + imaginary);
console.log("test mandelbrot " + mandelbrot(opi, one));

var mandelbrotMap = new Map(mandelbrot, one);

console.log("map test: " + mandelbrotMap.apply(opi));

/**
public int iterate(int number, int bound){    
	    if(cValue.magnit() > bound) return -1;
	    int level = 0;
	    for(int i=0; i< number; i++){
	      this.iterate();    
	      if(lastValue.magnit()>bound) break;
	      level++;
	    }
	    return level;
		
		**/



