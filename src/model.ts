import { DecVariable } from './dec-variable';
import { Name } from './name';
import { Integer } from './integer';
import { BinaryOperation } from './binary-operation';
import { Program } from './program';
/*
    #program1
    var mi_variable = 9
    var mi_variable2 = 6
    var resultado = mi_variable + mi_variable2 
*/

/*
    #program2
    var mi_variable = 9
    var mi_variable2 = 6
    var mi_variable3 = 7
    var resultado = mi_variable + mi_variable3 - mi_variable2 + 10 * 2
*/

const program = new Program([
    new BinaryOperation('=', new DecVariable('mi_variable'), new Integer(9)),
    new BinaryOperation('=', new DecVariable('mi_variable2'), new Integer(6)),
    new BinaryOperation(
        '=', 
        new DecVariable('resultado'), 
        new BinaryOperation(
            '+', 
            new Name('mi_variable'), 
            new Name('mi_variable2')
        )
    )
]);

const program2 = new Program([
    new BinaryOperation('=', new DecVariable('mi_variable'), new Integer(9)),
    new BinaryOperation('=', new DecVariable('mi_variable2'), new Integer(6)),
    new BinaryOperation('=', new DecVariable('mi_variable3'), new Integer(7)),
    new BinaryOperation(
        '=', 
        new DecVariable('resultado'), 
        new BinaryOperation(
            '+', 
            new Name('mi_variable'), 
            new BinaryOperation(
                '-', 
                new Name('mi_variable3'), 
                new BinaryOperation(
                    '+', 
                    new Name('mi_variable2'), 
                    new BinaryOperation(
                        '*', 
                        new Integer(10), 
                        new Integer(2)
                    )
                )
            )
        )
    )
]);

//print program1
console.log(`${program}`)
//execute program1
console.log(program.exec({}));

//print program2
console.log(`${program2}`)
//execute program2
console.log(program2.exec({}));