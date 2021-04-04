

export const promsy = (passes:any) => new Promise(resolve => {
    setTimeout(() => {
        resolve('something')
    }, 2000)
})