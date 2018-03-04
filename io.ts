import {ITodo} from "./todoManager";
import * as fs from "fs";

const jsonFileName = 'todo.json'

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