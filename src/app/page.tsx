"use client";

type Morador = {
  primeiroNome: String;
  sobrenome: String;
}

export default function Home(){

const morador ={
    primeiroNome : "Sandro",
    sobrenome: 'pereira'
  }
function formatarNomeMorador(morador: any){
  return morador.primeiroNome + '' + morador.sobrenome;
}

function obterSaudacao(morador : null | Morador){
  if (morador){
    return <span> Olá {formatarNomeMorador(morador)}!</span>;
  }
  return <span> Olá Estranho!!!</span>;
}


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      <h1 className="text-4x1 font-bold">{obterSaudacao(morador)}</h1>
      
    </div>
  );
};


