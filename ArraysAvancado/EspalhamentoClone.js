//Devemos clonar uma lista e depois adicionar um valor nela sme mexer na lista original;

const num = [2, 5, 6, 7]
/*const numClone = num
console.log(num)
console.log(numClone)

// o valor é adicionado nas duas listas pois não foi feito um clone de fato e sim apenas uma referência da lista original.
numClone.push(10)
console.log(num)
console.log(numClone)*/

// O jeito correto é usar espalhamento, ele de fato irá clonar e consegue adicionar elementos sem o push

const listaClone = [...num, 10];
console.log(num)
console.log(listaClone)
