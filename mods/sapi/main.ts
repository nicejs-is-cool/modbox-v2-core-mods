/// <reference path="../../../rmtb-modbox-ext/src/declarations.d.ts" />

export default class sapi implements ModBox.Mod {
    name = "sapi"
    description = "strollbox api"
    version = "0.0.1"
    author = "nicejs-is-cool"
    id = "sapi"
    //allowed = ["stb" as ModBox.Allowed]
    registeredCmds = new Map<string, Function>()
    //@ts-ignore
    socket = window.exportedEnv.socket;
    enable() {
        // fix socket
        //ModBox.SocketIO.Socket = (window as any).socket;
        // patch sendMsg
        /*(window as any).sendMsg = (t: string) => {
            if (t.startsWith("/")) {
                const [cmd, ...args] = t.slice(1).split(/ +/);
                let func = this.registeredCmds.get(cmd)
                if (func) return func(...args);
            }
            return this.ogSendMsg(t);
        }*/
        
        return true;
    }
    disable() {
        return true;
    }
    RegisterCommand(namespace: string, name: string, cmd: Command) {
        /*this.registeredCmds.set(`${namespace}:${name}`, func);
        if (this.registeredCmds.has(name)) {
            console.warn('[duckapi] Conflicting command names:', name);
            return;
        }
        this.registeredCmds.set(name, func);
        return [
            `${namespace}:${name}`,
            name
        ]*/
        const commands = (window as any).exportedEnv._commands
        //commands[`${namespace}:${name}`] = cmd;
        if (commands[name]) {
            commands[`${namespace}:${name}`] = cmd;
        } else {
            commands[name] = cmd;
        }
    }
    SystemMessage(content: string, nick?: string): HTMLDivElement {
        //(window as any).printMsg({sid: 'system', content});
        return (window as any).printSysMsg(content, nick)
    }
}
export interface Command {
    help: string;
    args?: [string, boolean][]; // argument name, required(?)
    exec: (e: string[]) => any;
}