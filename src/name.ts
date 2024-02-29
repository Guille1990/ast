import { Context } from './context';

export class Name {
    constructor(private literal_name: string) {} 

    toString(): string {
        return this.literal_name;
    }

    exec(context: Context): string {
        const returnVal = context[this.literal_name];
        return returnVal;
    }
}