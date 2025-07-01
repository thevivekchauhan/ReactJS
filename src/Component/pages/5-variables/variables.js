//  var	                     let                         const
//  Old way                  Modern way                  Constant
//  don’t use now	         Block Scoped                Value never changes
//  Can Change? ✅ Yes      Can Change? ✅ Yes          Can Change ? ❌ No




import React from "react";


function MeAbhiJindaHu() {
  var a = 10;
//   let b = 20;
//   const c = 30;

//   console.log("Learn difference between Variable: ");
  console.log("value of a =", a);
//   console.log("value of b =", b);
//   console.log("value of c =", c);



//   a = 100;
//   b = 200;
//   // c = 300;
//   console.log("value of a =", a);
//   console.log("value of b =", b);
//   console.log('value of c =', c);



//   var a = 100;
//   let b = 200;
//   const c = 300;
// //   console.log("value of a =", a);
//   console.log("value of b =", b);
//   console.log('value of c =', c);


  return (
    <div>
      <h1>Variables</h1>
      <p>Learn difference between Variable: </p>
    </div>
  );
}

export default MeAbhiJindaHu;
