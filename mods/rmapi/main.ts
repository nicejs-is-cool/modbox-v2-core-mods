/// <reference path="../../../rmtb-modbox-ext/src/declarations.d.ts" />

export default class rmapi implements ModBox.Mod {
    name = "rmtrollboxapi"
    description = "rmtrollbox api"
    version = "0.0.1"
    author = "nicejs-is-cool"
    id = "rmapi"
    allowed = ["rmtrollbox" as ModBox.Allowed]
    enable() {
        return true;
    }
    disable() {
        return true;
    }
    /**
     * Shows a popup.  
     * @param content HTML Content to show in the popup.
     */
    Popup(content: string) {
        (window as any).popup(content);
    }
    /**
     * Shows a prompt popup.  
     * @param title Title of the prompt.
     * @param desc Description of the prompt.
     * @param def Text box default value
     */
    PromptPopup(title: string, desc: string, def: string = ""): Promise<null | string> {
        return new Promise(resolve => {
            (window as any).promptPopup(title, desc, def, resolve);
        })
    }
    /**
     * Shows a (big) prompt popup.
     * (a.k.a. uses textarea instead input)
     * @param title Title of the prompt.
     * @param desc Description of the prompt.
     * @param def Text box default value
     */
    BigPromptPopup(title: string, desc: string, def: string = ""): Promise<null | string> {
        return new Promise(resolve => {
            (window as any).bigpromptPopup(title, desc, def, resolve);
        })
    }
    /**
     * Shows a confirmation popup.
     * @param title Title of the prompt.
     * @param desc Description of the prompt.
     * @param def Text box default value
     */
    ConfirmPopup(title: string, desc: string): Promise<boolean> {
        return new Promise(resolve => {
            (window as any).confirmPopup(title, desc, resolve);
        })
    }
    
}
