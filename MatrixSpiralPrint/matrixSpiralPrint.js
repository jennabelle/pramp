// Given a 2D array (matrix) named M, print all items of M in a spiral order, clockwise.
// For example:

// M  =  1   2   3   4   5
//        6   7   8   9  10
//       11  12  13  14  15
//       16  17  18  19  20

// The clockwise spiral print is:  1 2 3 4 5 10 15 20 19 18 17 16 11 6 7 8 9 14 13 12

var arr = [ [  1,  2,  3,  4,  5 ], // arr[0][arr.length - 1]
          [  6,  7,  8,  9, 10 ], // arr[1][arr.length - 1]
          [ 11, 12, 13, 14, 15 ], // arr[2][arr.length - 1]
          [ 16, 17, 18, 19, 20 ] 
        ];
        
function printClockwiseSpiral(arr) {
   
   var result = [];
   var bottomRow = arr.length - 1;
   var rightColumn = arr[0].length - 1;
   
   for (var i = 0; i < arr[0].length; i++) { // iterates thru 1st subarray
      result.push( arr[0][i] );
   }
   for (var j = 0; j < arr.length; j++) {
      
      var arrLength = arr.length - 1;
      
      result.push( arr[j][arrLength] );
   }
   for (var k = rightColumn; k >= 0; k--) {
      
      result.push( arr[bottomRow][k] );
   }
   //for (var l = rightColumn; l >= 0; )
   
   return result;
}

console.log(printClockwiseSpiral(arr));
//