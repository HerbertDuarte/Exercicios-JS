let amigo = {
  nome: 'josé',
  sexo: 'M',
  peso: 72.5,
  engordar(p=0){
    this.peso += p
    console.log('engordou')
  }
}

amigo.engordar(3)

console.log(amigo.peso)