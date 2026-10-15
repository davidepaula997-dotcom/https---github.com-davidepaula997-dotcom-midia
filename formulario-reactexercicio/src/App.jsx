
import { useState } from 'react'
import './App.css'

function App() {
  const [alunos, setalunos] = useState([])
  // let alunos=[] (É igual a de createImageBitmap, mas apenas para o javascript.)

  let enviarAluno = function alertar() {
    alert("cliquei")
    console.log({
      nome: document.getElementById('nome'),
      idade: Number(document.getElementById('idade').value),
      curso: document.getElementById('curso').value,
      turno: document.getElementById('turno').value,


    });
    setAlunos([...alunos, {
      nome:document.getElementById('nome'),
      idade: Number(document.getElementById('idade').value),
      curso: document.getElementById('curso').value,
      turno: document.getElementById('turno').value,
    }])
  }
  return (
    <>
      <section id='center'>
        {/* <form action="#" method='post'> */}
        <input type="text" name="nome" id="nome" placeholder='Nome do aluno' />
        <input type="text" name="idade" id='idade' placeholder='Idade do aluno' />
        <input type='text' name='curso' id='curso' placeholder='Curso do Aluno' />
        <input type="text" name="turno" id="turno" placeholder='Turno do curso' />
        <input type="submit" value="Enviar" onClick={enviarAluno} />



        {
          alunos.map(
            (aluno, index) => <Aluno key=
              {ndex} nome={aluno.nome} idade=
              {aluno.idade} curso={aluno.curso}
              turno={aluno.turno}/>
          )
        }

      </section>

    </>


  )
}

export default App
