export enum STATES {
    "MN", "TX", "CA", "AL"
}

let checkIfMinnesota = (state: STATES) => {
    if (state === STATES.MN) {
        return true
    }
    return false;
}

console.log(`State is TX -   ${checkIfMinnesota(STATES.TX)}`);
console.log(`State is MN -   ${checkIfMinnesota(STATES.MN)}`);

var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));