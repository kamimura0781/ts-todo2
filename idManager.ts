import * as fs from "fs";

export function genId(){
    let counter:number = parseInt(fs.readFileSync('counter.txt','utf-8'))
    counter+=1;
    fs.writeFileSync('counter.txt',counter);
    return counter;
}