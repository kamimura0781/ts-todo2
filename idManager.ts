import {readFile,writeFile} from "./io";

export function genId(){
    const counter:number = parseInt(readFile('counter.txt'))
    const newCounter=counter+1;
    writeFile('counter.txt',newCounter);
    return newCounter;
}
