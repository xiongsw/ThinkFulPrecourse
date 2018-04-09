var piVar=3.1415, piVar0=piVar;
let piLet=3.1415, piLet0=piLet;
const piConst=3.1415, piConst0=piConst;

function piChange(){
	piVar=piVar0*2.0;
	piLet=piLet0*2.0;
	// piConst=piConst0*2.0  // not allowed
}

piChange();
alert("Case 1: original value of piVar="+piVar0+"; current value="+piVar);
//
alert("Case 2: original value of piLet="+piLet0+"; current value="+piLet);
{

alert("Case 3: a constant numerical number can not been changed by calling piChange() ");
};

const piObj={pi: piVar0};
piObj["pi2"]=piVar0*2.0;
alert("Case 4: original const piObj only has 1 key+value"+piObj.pi+"; "
	  +" changed to 2keys+values, 2nd key-value="+piObj["pi2"]);


var values = { a: 1 }, values0=values;

function pureFunction ( a ) {
	// this example: copied from http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/
  var b = 1;
  a = a * b + 2;
  return a;
}

var c = pureFunction( values.a );
alert("interesting: values.a="+values0.a+"; new value="+values.a)

//'use strict';
function piStrict(){
'use strict';
//the following code works without 'use strict'
piLet9=piLet0;
alert("Error in Case 5: set a variable piLet9 without \'var, let or const\'");

}
piStrict(piLet0);