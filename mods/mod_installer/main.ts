/// <reference path="../../../rmtb-modbox-ext/src/declarations.d.ts" />
import type rmtb from '../rmapi/main'
import * as axios from 'axios';
@ModBox.Depends("rmapi")
export default class ModInstaller implements ModBox.Mod {
    name = "Mod Installer"
    version = "0.0.1"
    author = "nicejs-is-cool"
    description = "Utility that lets you easily install (un)packed mods"
    id = "mod_installer"
    enable() {
        return true;
    }
    disable() {
        return true;
    }
    async AskForInstall(name: string, filename: string, url: string) {
        let install = await ModBox.Mods.Get<rmtb>("rmapi").ConfirmPopup(`Install`, `Are you sure you want to install ${name}?
URL: ${url}`)
        if (!install) return;

        const bytedisplay = await import("./bytedisplay");
        await ModBox.Mods.Get<rmtb>("rmapi").Popup(`<div id="mbmi_popup_content">
<h3>Downloading</h3>
<label for="mbmi_popup_progress" id="mbmippl">? B / ? B</label>
<progress id="mbmi_popup_progress"/>
</div>`)
        const progressBar = document.getElementById('mbmi_popup_progress') as HTMLProgressElement;
        const pBlabel = document.getElementById('mbmippl') as HTMLLabelElement;
        
        //@ts-ignore
        const resp = await axios.get(url, {
            onDownloadProgress(progressEvent: any) {
                if (progressEvent.total) {
                    progressBar.max = progressEvent.bytes;
                    progressBar.value = progressEvent.total;
                    pBlabel.innerText = `${bytedisplay.default(progressEvent.bytes)} / ${bytedisplay.default(progressEvent.total)}`;
                } else {
                    pBlabel.innerText = `${bytedisplay.default(progressEvent.bytes)} / ? B`
                }
            },
            data: 'arraybuffer'
        })
        //@ts-ignore
        await ModBox.fs.writeFile(`/mod/${filename}`, ModBox.BFS.require('buffer').Buffer.from(resp.data), {});
        await ModBox.Mods.Get<rmtb>("rmapi").Popup("Mod installed successfully!");
    }
}
