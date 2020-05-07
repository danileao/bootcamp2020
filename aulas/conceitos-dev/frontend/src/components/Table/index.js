import React, { useState } from "react";

export default function Table() {
  const alunos = [
    { id: 1, nome: "Maria" },
    { id: 2, nome: "Maria1" },
    { id: 3, nome: "Maria2" },
    { id: 4, nome: "Maria3" },
  ];

  const [ativo, setAtivo] = useState(0);

  return (
    <>
      <h1>Table</h1>

      <table>
        <thead>
          <tr>
            <th>Nome do Aluno</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.nome}</td>
              <button onClick={() => setAtivo(aluno.id)}>Abrir</button>

              {ativo === aluno.id && <div>Abrirrir</div>}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
