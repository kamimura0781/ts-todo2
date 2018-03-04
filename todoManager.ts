import {readTodo,writeTodo} from "./io";
import {genId} from "./idManager";

export interface ITodo{
    content:string;
    id:number;
    completed:boolean;
}

export function list(){
    const todos:ITodo[] = readTodo();
    console.log("TODOList:")
    for(const todo of todos){
        if(todo.completed == false){
            console.log(`id:${todo.id},todo:${todo.content}`)
        }
    }
}

export function add(todo :string){
    const newId = genId();
    const newTodo:ITodo = {
        content:todo,
        id:newId,
        completed:false
    };
    const todos:ITodo[] = readTodo();
    todos.push(newTodo);
    writeTodo(todos);
    console.log(`TODO:${newTodo.content}を追加しました．`)
}

export function complete(id_str:string){
    let i:number;
    const id = parseInt(id_str);
    const todos = readTodo();
    for(i=0;i<todos.length;i++){
        if(todos[i].id == id){
            if(todos[1].completed == false){
                todos[i].completed = true;
                writeTodo(todos);
                console.log(`TODO:${todos[i].content}を完了しました．`)
            }else{
                console.log(`TODO:${todos[i].content}は完了しています．`)
            }
            break;            
        }
    }

    if(i == todos.length){
        console.log(`指定されたIDのTODOはありません．`)
    }
}