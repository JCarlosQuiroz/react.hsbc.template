interface Item {
  word: string[];
  value: number;
}

const table: Item[] = [
  { word: ["A", "J"],value: 1},
  { word: ["B", "K", "S"],value: 2},
  { word: ["C", "L", "T"],value: 3},
  { word: ["D", "M", "U"],value: 4},
  { word: ["E", "N", "V"],value: 5},
  { word: ["F", "O", "W"],value: 6},
  { word: ["G", "P", "X"],value: 7},
  { word: ["H", "Q", "Y"],value: 8},
  { word: ["I", "R", "Z"],value: 9},
];

function parseToNumber(c: string): string {
  if (c.match(/\d/)) {
    return c;
  } else {
    for (const item of table) {
      for (const word of item.word) {
        if (c === word) {
          return item.value.toString();
        }
      }
    }
  }
  
  return "Ah ocurrido un error"
}


function routineCalc(ref: string): number {
  const refArray = ref.split("").reverse();
  let counter = 0;
  let total = 0;
  for (const item of refArray) {
    let base = "0";
    if (counter % 2 === 0) {
      base = (parseInt(item, 10) * 2).toString();
      if (base.length === 2) {
        base = (parseInt(base[0], 10) + parseInt(base[1], 10)).toString();
      }
      total += parseInt(base, 10);
    } else {
      base = (parseInt(item, 10) * 1).toString();
      if (base.length === 2) {
        base = (parseInt(base[0], 10) + parseInt(base[1], 10)).toString();
      }
      total += parseInt(base, 10);
    }
    counter += 1;
  }
  console.log("Total: " + total);
  const newRef = total.toString().charAt(total.toString().length - 1);
  return 10 - parseInt(newRef, 10);
}

function module97(ref: string): string {
  console.log("Modulo de Validacion 97(RAP)-HSBC");
  console.log("Nombre y Numbero de Cliente:" + ref);
  ref = ref.toUpperCase();
  let numeric = "";
  for (const item of ref) {
    numeric += parseToNumber(item);
  }
  console.log("Referencia numeric: " + numeric);
  const checkDigit = routineCalc(numeric);
  console.log("Digito Verificador: " + checkDigit);
  return ref + checkDigit.toString();
}

// Enter the customer identified

const reference = module97("Estaeslapruebadelcliente12345");
console.log("Referencia: " + reference);
