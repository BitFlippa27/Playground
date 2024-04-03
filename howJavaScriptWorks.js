console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000 );
console.log("3");

/*
JavaScript Run Time Environment
-------------------------------
+ V8 Engine
+ Heap Memory
+ Call Stack

Reihenfolge
1. "1" kommt auf den Call Stack, wird ausgeführt und wieder vom Call Stack genommen
2. setTimeout() kommt auf den Call Stack, Web API wird benachrichtigt, setTimeout wird wieder vom Call Stack genommen
3. "3" kommt auf den Call Stack, wird ausgeführt und wieder vom Call Stack genommen
4. Im Hintergrund Asynchron: 2000ms timer läuft ab und pusht setTimeout in die Callback Queue
5. Im Hintergrund Asynchron: Eventloop checkt die ganze Zeit ob Call stack leer ist
6. Call Stack ist leer "3" kommt auf den Call Stack, wird ausgeführt und wieder vom Stack genommen
 
*/

