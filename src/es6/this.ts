
export let voice: string;
export let muh = () => {
    let voice: string = 'Bäh';
    this.voice = 'Mäh'
    let shout = () => console.log('voice', voice);
    let shout1 = () => console.log('this.voice', this.voice);
    shout();
    shout1();
};

/**
 * tes2
 */
export class test2 {
    voice: string = 'Schalalala';
    constructor() {
        console.log(this.voice);
    }
}