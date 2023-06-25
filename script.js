
    const estudante = {
        nome: 'Douglas',
        sobrenome: 'Oliveira',
        numeroMatricula: 123456789,
        notasDoSemetre: [10,8,7,9,7,8.5],
        
    }



estudante.modulo = 1
// console.log(estudante);

// console.log(estudante.nome);
// console.log(estudante.notasDoSemetre[1]);
// console.log(estudante.modulo);

const copiaEstudante = {
  ...estudante,
  nome:'Astrodev', 
  notasDoSemetre: [estudante.notasDoSemetre,9],
  modulo: estudante.modulo+1
};

//console.log(copiaEstudante);

const estudantesLabenu = []
copiaEstudante.push([estudantesLabenu])
console.log(estudantesLabenu);