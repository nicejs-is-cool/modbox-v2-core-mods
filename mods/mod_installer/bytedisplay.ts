export default function byteDisplay(bytes: number): string {
    if (bytes > (10 ** 9)) return `${(bytes/(10**9)).toFixed(2)} GB`
    if (bytes > (10 ** 6)) return `${(bytes/(10**6)).toFixed(2)} MB`
    if (bytes > (10 ** 3)) return `${(bytes/1000).toFixed(2)} KB`
    return `${bytes} B`
}