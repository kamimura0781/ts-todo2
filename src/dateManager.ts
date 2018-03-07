import {ITodo} from "./todoManager";

export function filtering(todo:ITodo,days:number):boolean{
    if(todo.completed == false) return false;

    const diff = new Date().getTime() - todo.completedDate!.getTime();
    const daysDiff = diff/(1000*60*60*24);
    return daysDiff > days;
}
