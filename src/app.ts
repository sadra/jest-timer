export const setAlaramForSeconds = (seconds:number, message:string) => new Promise(resolve => {
    setTimeout(() => {
        resolve(message)
    }, seconds * 1000)
})