import {readFile,writeFile,readTodo,writeTodo} from "./io";
import {genId} from "./idManager";
import {filtering} from "./dateManager";

export interface ITodo{
    content:string;
    id:number;
    completed:boolean;
    genDate:Date;
    completedDate:Date;
}
hogehoge
export function setup(){
    writeFile("todo.json","[]");
    writeFile("counter.txt",0);
    console.log("初期化完了．");
}

export function list(){
    const todos:ITodo[] = readTodo();
    console.log("TODOList:")
    for(const todo of todos){
        if(!filtering(todo,3)){
            const state = todo.completed ? "✅" : " ";
            console.log( `${state}  [${todo.id}] [${todo.genDate}~${todo.completedDate}]   ${todo.content}`)
        }
    }
}

export function add(todo :string){
    const newId = genId();
    const newTodo:ITodo = {
        content:todo,
        id:newId,
        completed:false,
        genDate:new Date(),
        completedDate:new Date(0,0,0,0,0)
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