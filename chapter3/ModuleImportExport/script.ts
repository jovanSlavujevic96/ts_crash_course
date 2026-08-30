import type {someType} from './lib';

const s1: someType = 0;

import type {someType as aliasName} from './lib';

const s2: aliasName = 'string';

import * as lib from './lib.js';

const s3: lib.someType = 0;
console.log(s1, s2, s3);