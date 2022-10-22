import type DuckAPI from '../../duckapi/main'
export default function Command_Color(duckapi: DuckAPI, color: string) {
    duckapi.socket.emit('USER_CHANGE_NICK', localStorage["user_pseudo"], color);
}