// There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.
let x = BigInt(Number.MAX_SAFE_INTEGER);
console.log(typeof(x),x+2n);   
console.log(typeof(x),x);      

//             Math.floor 	Math.ceil 	Math.round 	Math.trunc
// 3.1      	3 	          4  	       3           	3
// 3.6 	        3             4 	       4         	3
// -1.1      	-2 	         -1 	      -1 	        -1
// -1.6 	    -2 	         -1 	      -2 	        -1

//string

// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// 	String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

let str = " Nishit   ";
console.log(str.length);
console.log(str.slice(2,4));
console.log(str.substring(4,"k"));

console.log(str.replace("i","k"));
console.log(str.replaceAll("i","k"));

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.concat("Patel"));


console.log(str.charAt(1));
console.log(str.charCodeAt(2));


console.log(str.split("h"));