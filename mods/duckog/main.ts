/// <reference path="../../../rmtb-modbox-ext/src/declarations.d.ts" />
import type DuckAPI from '../duckapi/main'

import Command_Help from './commands/help'
import Command_Color from './commands/color'
import Command_Reverse from './commands/reverse'
import Command_Lorem from './commands/lorem'
import Command_Clear from './commands/clear'

//@ModBox.Depends("duckapi") fked it up aaaaa
export default class DuckOG implements ModBox.Mod {
    name = "DuckOG"
    description = "brings (some of) the original trollbox's commands back into ducktrollbox!"
    version = "0.0.1"
    author = "nicejs-is-cool"
    id = "duckog"
    allowed = ["ducktb" as ModBox.Allowed]
    registered: string[][] = [];
    duckapi = ModBox.Mods.Get<DuckAPI>("duckapi");
    regcmd(name: string, func: Function) {
        let h = this.duckapi.RegisterCommand("duckog", name, func.bind(this, this.duckapi))
        if (h) this.registered.push(h);
    }
    enable() {
        this.regcmd("help", Command_Help)
        this.regcmd("color", Command_Color)
        this.regcmd("reverse", Command_Reverse)
        this.regcmd("lorem", Command_Lorem)
        this.regcmd("clear", Command_Clear)
        return true;
    }
    disable() {
        for (const registered of this.registered) {
            this.duckapi.registeredCmds.delete(registered[0]);
            this.duckapi.registeredCmds.delete(registered[1]);
        }
        return true;
    }
}