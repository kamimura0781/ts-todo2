import { setup, add, complete, list } from "./todoManager";

const [_1, _2, subcommand, arg] = process.argv;

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

function waitAndAnswer(message:string) : Promise<any> {
    console.log("Wait for 3 second.");
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`You said ${message}`);
        resolve();
    }, 3000);
    });
}

async function exec() {
    console.log("step 1");
    await waitAndAnswer("hi");
    console.log("step 2");
    await waitAndAnswer("konnichiwa");
    console.log("end");    
}

exec();