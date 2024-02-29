import { DecVariable } from './dec-variable';
import { Name } from './name';
import { Integer } from './integer';
import { Context } from './context';

export class BinaryOperation {
    constructor(
        public operation: string,
        public left: DecVariable | Name | Integer,
        public right: Integer | BinaryOperation | Name,
    ) { }

    toString(): string {
        return `${this.left} ${this.operation} ${this.right}`;
    }

    exec(context: Context): string | number | void {
        type Operation = '+' | '-' | '*' | '/';

        function isOperation(operation: string): operation is Operation {
            return ['+', '-', '*', '/'].includes(operation);
        }

        if (
            this.left instanceof DecVariable &&
            this.operation === '='
        ) {
            const right = this.right.exec(context);
            const leftName = this.left.exec(context);

            if (typeof right === 'string') {
                context[leftName] = eval(right);
                return context[leftName];
            }

            context[leftName] = right;
            return;
        }

        if (isOperation(this.operation)) {
            const left = this.left.exec(context);

            const right = this.right.exec(context);

            const operation = `${left} ${this.operation} ${right}`
            
            return operation;
        }
    }
}