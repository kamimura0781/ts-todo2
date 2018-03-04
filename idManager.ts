import {readFile,writeFile} from "./io";

export function genId(){
    let counter:number = parseInt(readFile('counter.txt'))
    counter+=1;
    writeFile('counter.txt',counter);
    return counter;
}
