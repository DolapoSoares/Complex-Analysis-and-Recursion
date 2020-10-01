/*
BIG 0 NOTATION

1.) O(n + 10) --> O(n)
2.) O(100 * n) --> O(n)
3.) O(25) --> O(1)
4.) O(n^2 + n^3) --> O(n^3)
5.) O(n + n + n + n) --> 
6.) O(1000 * log(n) + n) --> O(log(n))
7.) O(1000 * n * log(n) + n) --> O(nlog(n))
8.) O(2^n + n^2) --> O(n^2)
9.) O(5 + 3 + 1) --> O(1)
10.) O(n + n^(1/2) + n^2 + n * log(n)^10) --> O(n^2)
*/

/*
TIME AND SPACE COMPLEXITIES

1.)
    function logUpTo(n) {
      for (var i = 1; i <= n; i++) {
        console.log(i);
      }
    }

    space complexity is O(1)

2.)
    function logAtMost10(n) {
      for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
      }
    }

    space cpmplexity is O(1)

3.) 
    function logAtLeast10(n) {
      for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
      }
    }

    space cpmplexity is O(1)

4.)
    function onlyElementsAtEvenIndex(array) {
      var newArray = Array(Math.ceil(array.length / 2));
      for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
      }
    return newArray;
    }

     space cpmplexity is O(n)

5.)
    function subtotals(array) {
      var subtotalArray = Array(array.length);
      for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
      }
      return subtotalArray;
    }

     space cpmplexity is O(1)
*/

// RECURSION

// 1. 
const productOfArray = arr => {
  if (arr.length == 0) return 1;
  return arr[0] * productOfArray(arr.splice(1));
}
//console.log(productOfArray([1,2,3]));
//console.log(productOfArray([1,2,3,10]));

// 2.
var nestedObject = {
  data: {
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44
                  }
              }
          }
      }
  }
}
 
function contains(obj, value){
	for(var key in obj){
		if(typeof obj[key] === 'object'){
			return contains(obj[key], value);
		}

		if (obj[key] === value){
			return true;
		}
	}
	return false;
}

console.log(contains(nestedObject, "foo"));
console.log(contains(nestedObject, 44));