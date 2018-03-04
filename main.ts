import { setup, add, complete, list } from "./todoManager";

const [_1, _2, subcommand, arg] = process.argv;

hogehoge
fugafuga
switch(subcommand){
    case "setup":
        setup();
        break;
    case "add":
        if(arg){
            add(arg);
        }else{
            console.log("追加したいTODOを指定してください．")
        }
        break;
    case "complete":
        if(arg){
            complete(arg);
        }else{
            console.log("完了したいTODOのIDを指定してください．")
        }
        break;
    default:
        list();
        break;
}