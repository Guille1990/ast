type TokenType = 'INTEGER' | 'VAR' | 'PLUS' | 'MINUS' | 'MUL' | 'DIV' | 'EQUAL' | 'NAME';

export class Token {
    constructor(
        private type: TokenType, 
        private value: string | number, 
        private line: number, 
        private column: number
    ) {}

    toString(): string {
        return `type: ${this.type}, value: ${this.value}, line: ${this.line}, column: ${this.column} \n`;
    }
}