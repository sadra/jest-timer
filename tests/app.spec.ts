import { setAlaramForSeconds } from '../src/app'

describe('Calculator', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it('should fire alarm and return message after seconds', () => {
        const message = "Wake Up Dude!"
        const seconds = 7

        const pendingPromise = setAlaramForSeconds(seconds, message).then(res => {
            expect(res).toBe(message)
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), seconds * 1000);
        })

        jest.runAllTimers()
        
        return pendingPromise
    })
})