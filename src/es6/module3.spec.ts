import { Hund } from './module3';

describe('Hund', () => {
    it('should have a name', () => {
        const hund = new Hund('Pluto');
        expect(hund.getName()).toBe('Pluto');

        spyOn(console, 'log');
        hund.bellen()
        expect(console.log).toHaveBeenCalled();
    });
});