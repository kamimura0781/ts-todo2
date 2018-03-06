import {ITodo} from "./todoManager";

export function filtering(todo:ITodo,days:number):boolean{
    if(todo.completed == false) return false;
    
    const diff = (todo.completedDate - todo.genDate);

    return todo.completedDate.getTime() - todo.genDate.setDate(todo.genDate.getTime() + days) > 0;
}