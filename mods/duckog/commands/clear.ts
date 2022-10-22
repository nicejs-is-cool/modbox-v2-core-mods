import type DuckAPI from '../../duckapi/main'
export default function Command_Clear(duckapi: DuckAPI) {
    let tbs = document.querySelector("#trollbox_scroll")
    if (tbs) tbs.innerHTML = "";
}