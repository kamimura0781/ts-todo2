import {ITodo} from "./todoManager";
import * as fs from "fs";

const jsonFileName = 'todo.json'

export function readFile(fileName:string):string{
    return fs.readFileSync(fileName,'utf-8');
}

export function writeFile(fileName:string, str:any):void{
    fs.writeFileSync(fileName,str,'utf-8');
}

//todo.jsonからTODOリストを取得
export function readTodo():ITodo[]{
    const todos:ITodo[] = JSON.parse(fs.readFileSync(jsonFileName,'utf-8'));
    return todos;
}

//TODOリストをtodo.jsonに書き込む
export function writeTodo(todos:ITodo[]){
    const jsonFile = JSON.stringify(todos);
    fs.writeFileSync(jsonFileName,jsonFile,'utf-8');
}