export function getUUID() {
    return new Date().getTime() + String(Math.random()).slice(2,)
}