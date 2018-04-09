console.log("Hello console");
var name=prompt("what is your name","");
document.write("<p>Welcome "+name+"</p>");
var properties=["red","14px","Arial"];
properties.push("bold","italic","underline");
document.write("<p>"+properties[0]+"</p>");
properties.unshift("green","yellow","blue");
document.write("<p>"+properties[0]+"</p>");
document.body.style.backgroundColar='red';
var iter=0;
while(iter<properties.length){document.write(properties[iter]+",");
      iter++;};

 for (var i = properties.length - 1; i >= 0; i--) {
 	document.write(" ****** "+properties[i]+", "+"<br> /");};
 
 /*     function main() {
       const message = "Hello world from JS!";
       console.log(message);
       alert(message);
    };
    main(); */

