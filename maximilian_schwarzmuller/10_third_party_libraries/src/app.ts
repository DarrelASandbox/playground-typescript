// There are many @types/package out there
import _ from 'lodash';

// If there are no package with types support
declare let GLOBAL: any;

console.log(_.shuffle([1, 2, 3]));
console.log(GLOBAL);
