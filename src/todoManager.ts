import {readFile,writeFile,readTodo,writeTodo} from "./io";
import {genId} from "./idManager";
import {filtering} from "./dateManager";

export interface ITodo{
    content:string;
    id:number;
    completed:boolean;
    genDate:Date;
    completedDate:Date|null;
}

const filteringDays = 3; //完了したTODOの日付からこの日にちが経過したら表示しない

export function setup(){
    writeFile("todo.json","[]");
    writeFile("counter.txt",0);
    console.log("初期化完了．");
}

export function list(){
    const todos:ITodo[] = readTodo();
    console.log("TODOList:")
    for(const todo of todos){
        if(!filtering(todo,filteringDays)){
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
        completedDate:null
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
            if(todos[i].completed == false){
                todos[i].completed = true;
                todos[i].completedDate = new Date();
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