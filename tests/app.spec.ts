import { promsy } from '../src/app'

describe('Calculator', () => {
    test('gets a value, if conditions favor', () => {
        jest.useFakeTimers()

        expect.assertions(3)

        const pendingPromise = promsy(true).then(res => {
            expect(res).toBe('something')
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
        })

        jest.runAllTimers()

        
        return pendingPromise
    })
})