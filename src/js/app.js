import ArrayBufferConverter from "./ArrayBufferConverter";
import getBuffer from './getBuffer'


const my_buffer = getBuffer();

const abc = new ArrayBufferConverter();
abc.load(my_buffer);
console.log(abc.toString());