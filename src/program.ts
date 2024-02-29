import { BinaryOperation } from './binary-operation';
import { Context } from './context';

export class Program {
    constructor(public binaryOperations: BinaryOperation[]) { }

    toString(): string {
        return this.binaryOperations.map((operation) => operation.toString()).join('\n');
    }

    exec(context: Context) {
        return this.binaryOperations.map((operation) => operation.exec(context)).pop();
    }
}