import { Context } from './context';

export class Integer {
    constructor(private value: number) {}

    toString() {
        return `${this.value}`;
    }

    exec(context: Context) {
        return this.value;
    }
}