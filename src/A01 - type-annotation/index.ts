/* eslint-disable */
// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Pedro'; // Qualquer stringo '' "" ``
let idade: number = 26; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0a7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
/* let big: bigint = 10n; // bigint */

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['1', '2', '3'];
let arrayDeStrings2: string[] = ['1', '2', '3'];

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 26,
  adulto: true,
  nome: 'Pedro Joaquim',
};

// Funcções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
