
//Removendo elementos de uma fila
 const fila =[3, 7, 9, 1, 0]

 function removerFila(){
  while (fila.length > 0) {
    let elementoRemovido = fila.shift();
    console.log("Remover:", elementoRemovido);
  }
}
  removerFila()
  console.log("O tamanho da fila é :", fila.length);


//removendo os elementos da lista, começando pelo primeiro, usando método splice()
 const lista =[3, 7, 9, 1, 0] 

 function removerLista(){
    while(lista.length > 0){
       let elementosRemovidosLista = lista.splice(0,1)
       console.log("Remover: ", elementosRemovidosLista)
    }
 } 
 removerLista()
 console.log("O tamanho  da lista é: ", lista.length)


 //Removendo elementos de uma pilha
 const pilha =[3, 7, 9, 1, 0]

function removerPilha(){
    while(pilha.length > 0){
    elementoRemovidoPilha = pilha.pop()
    console.log("Remover: ", elementoRemovidoPilha)
    }
}
removerPilha()
console.log("O tamanho da pilha é: " + pilha.length)


