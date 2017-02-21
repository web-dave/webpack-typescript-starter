export class Hund {
    constructor(private name: string) { }
    bellen = (): void => {
        console.log('Wau Wau');
    }
    knurren = (): void => {
        console.error('grrrrr');
    }
    getName = () => {
        console.log(this.name);
        return this.name;
    }
    setName = (n: string) => {
        this.name = n;
    }
}