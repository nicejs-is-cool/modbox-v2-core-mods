/// <reference path="../../../rmtb-modbox-ext/src/declarations.d.ts" />

export default class duckapi implements ModBox.Mod {
    name = "duckapi"
    description = "ducktb api"
    version = "0.0.1"
    author = "nicejs-is-cool"
    id = "duckapi"
    allowed = ["ducktb" as ModBox.Allowed]
    registeredCmds = new Map<string, Function>()
    //@ts-ignore
    socket = socket;
    enable() {
        // fix socket
        //ModBox.SocketIO.Socket = (window as any).socket;
        // patch sendMsg
        (window as any).sendMsg = (t: string) => {
            if (t.startsWith("/")) {
                const [cmd, ...args] = t.slice(1).split(/ +/);
                let func = this.registeredCmds.get(cmd)
                if (func) return func(...args);
            }
            this.socket.send(t);
        }
        return true;
    }
    disable() {
        (window as any).sendMsg = (t: string) => this.socket.send(t);
        return true;
    }
    RegisterCommand(namespace: string, name: string, func: Function) {
        this.registeredCmds.set(`${namespace}:${name}`, func);
        if (this.registeredCmds.has(name)) {
            console.warn('[duckapi] Conflicting command names:', name);
            return;
        }
        this.registeredCmds.set(name, func);
        return [
            `${namespace}:${name}`,
            name
        ]
    }
    SystemMessage(content: string) {
        (window as any).printMsg({sid: 'system', content});
    }
}