import type DuckAPI from '../../duckapi/main'
export default function Command_Reverse(duckapi: DuckAPI, ...ducc: string[]) {
    duckapi.socket.send(ducc.join(' ').split('').reverse().join(''));
}