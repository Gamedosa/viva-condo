"use client";

type Morador = {
  primeiroNome: String;
  sobrenome: String;
}

export default function Home(){

function formatarNomeMorador(morador: any){
  return morador.primeiroNome + '' + morador.sobrenome;
}

function obterSaudacao(morador : null | Morador){
  if (morador){
    return <span> Olá {formatarNomeMorador(morador)}!</span>;
  }
  return <span> Olá Estranho!!!</span>;
}

const morador ={
    primeiroNome : "Sandro",
    sobrenome: 'pereira'
  }

  return (
    <div id="principal" className="min-h-screen flex items-center justify-center bg-black">
      <div id="componente-azul" className="card-azul">
      <h1 id="name" className="text-2x1 font-bold text-center">
          {obterSaudacao(morador)}
        </h1>
      </div>      
    </div>
  );
};


