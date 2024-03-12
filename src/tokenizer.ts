import { open } from 'node:fs/promises';
import { Token } from './token';
import * as path from 'node:path';

/*
    INTEGER : 123, 78, 8, 9
    VAR : 'var'
    PLUS: +
    MINUS: -
    MUL: *
    DIV: /
    EQUAL: =
    NAME: string

    # program example
    8 + 9
    new Token(INTEGER, 8, 1, 1);
    new Token(PLUS, '+', 1, 3);
    new Token(INTEGER, 9, 1, 5);
*/

export class Tokenizer {
    private emitToken(
        chunk: string, 
        line: number, 
        column: number
    ): Token {
        if (!isNaN(Number(chunk))) {
            return new Token('INTEGER', Number(chunk), line, column);
        }

        switch (chunk) {
            case 'var':
                return new Token('VAR', 'var', line, column);
            case '+':
                return new Token('PLUS', '+', line, column);
            case '-':
                return new Token('MINUS', '-', line, column);
            case '*':
                return new Token('MUL', '*', line, column);
            case '/':
                return new Token('DIV', '/', line, column);
            case '=':
                return new Token('EQUAL', '=', line, column);
            default: 
                return new Token('NAME', chunk, line, column);
        }
    }

    public async parse (fileName: string): Promise<Token[]> {
        let tokens: Token[] = [];
        const dataFile = await open(path.join(__dirname, fileName));
        let index = 1;
        for await (const line of dataFile.readLines()) {
            const chunks = line.split(' ').filter(chunk => chunk !== '');
            chunks.forEach((chunk, i) => {
                const column = line.indexOf(chunk);
                const token = this.emitToken(chunk, index, column + 1);
                tokens.push(token);  
            })    

            index++;
        }

        return tokens;
    }
}

(new Tokenizer()).parse('../program_two.lp').then(tokens => console.log(`${tokens}`));