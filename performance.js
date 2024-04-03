var n = 125000;
var arr = Array.apply( null, Array( n ) ).map( ( x, i ) => i );
console.info( arr.length); // 125000

// Helpers
var checkArr = ( arr, item ) => arr.includes(item);
var checkSet = ( set, item ) => set.has( item );

// Vars
var set, result;

console.time( 'timeTest' );
result = checkArr( arr, 123123 );
console.timeEnd( 'timeTest' );

set = new Set( arr );

console.time( 'timeTest' );
checkSet( set, 123123 );
console.timeEnd( 'timeTest' );