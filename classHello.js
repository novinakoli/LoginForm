"use strict";
exports.__esModule = true;
exports.Hello = void 0;
var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.testfun = function () {
        this.name = "xyz";
        console.log("Hello Typescript");
    };
    return Hello;
}());
exports.Hello = Hello;
// export default class {
//     name:string;
//     rollno:number;
//     testfun()
//     {
//         this.name="xyz";
//         console.log("Hello Typescript");
//     }
// }
