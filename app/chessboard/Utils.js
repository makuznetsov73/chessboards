export class Utils {
    static taHas(arr, item) {
        arr.some(a => a.some(!!item))
    }
}