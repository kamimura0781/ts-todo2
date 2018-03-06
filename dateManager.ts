import {ITodo} from "./todoManager";

export function filtering(todo:ITodo,days:number):boolean{
    if(todo.completed == false) return false;

    const diff = (todo.completedDate.getDate() - todo.genDate.getDate());
    return (diff/(1000*60*60*24)) > 3;
}
