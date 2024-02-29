import { Context } from './context';

export class DecVariable {
    constructor(private literal_name: string) {
        
    }

    toString(): string {
        return `var ${this.literal_name}`;
    }

    exec(context: Context): string {
       return this.literal_name;
    }
}