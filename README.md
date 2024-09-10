# 💾 ObjeX
Repositório de projeto da disciplina de REQ-T2.


O ObjeX é uma plataforma web de auxilio ao professor projetada para promover a interatividade e o engajamento dos alunos. Os professores podem criar e gerenciar atividades educacionais, oferecendo desafios específicos para os estudantes aprimorarem seus conhecimentos. A plataforma facilita a formação de grupos, promovendo uma aprendizagem mais colaborativa e envolvente. É uma ferramenta inovadora que visa tornar o processo de aprendizagem mais dinâmico e eficaz.

<br>

## ☁️ Disponibilização da Solução Web

### Link: https://objex-objex.ftbpws.easypanel.host/login/aluno

<br>

### Diagrama Respresentando o Fluxo de Utilização da Aplicação:
![Fluxo de Utilização ObjeX](https://github.com/user-attachments/assets/0e0296e7-ce93-4a91-a0ff-7a93dabc7fcb)

<br>

### Exemplo de Casos de Teste para utilizar nas Atividades de Implementação:

```python
usuario = Usuario("João", 30, "123.456.789-00")

assert usuario.dizer_ola() == "Olá, meu nome é João e tenho 30 anos"
assert usuario.dados() == "Nome: João, Idade: 30, CPF: 123.456.789-00"
assert usuario.nome == "João"
assert usuario.idade == 30
assert usuario.cpf == "123.456.789-00"
```

### Exemplo de Resposta válida da Atividade com os Casos de Teste definido acima:

```python
class Usuario:
  def __init__(self, nome, idade, cpf):
      self.nome = nome
      self.idade = idade
      self.cpf = cpf

  def dizer_ola(self):
      return f"Olá, meu nome é {self.nome} e tenho {self.idade} anos"

  def dados(self):
      return f"Nome: {self.nome}, Idade: {self.idade}, CPF: {self.cpf}"
```

<br>

### Exemplo de Planilha para Cadastro de Alunos:
<div align="start">
  <a href="https://docs.google.com/spreadsheets/d/1MfsN4hm4ZsPiRiHAH0XfTg-UqqlUCxsPtsYiO7ClsoU/edit?usp=sharing" >
    <img height="100" src="https://cdn.worldvectorlogo.com/logos/google-sheets-logo-icon.svg" />
    <p>Planilha de Alunos (Google Sheets)</p>
  </a>
</div>

<br>

<h2>
  💻 Tecnologias
</h2>

[![Tecnologias](https://skillicons.dev/icons?i=js,react,nodejs,mongodb)](https://skillicons.dev)

<h2>
    👨‍💻 Integrantes
</h2>

<table>


  <tr>
  <td valign="top">
      <a href="https://github.com/CaioSulz" >
        <img align="center" height="100" src="https://github.com/CaioSulz.png" />
        <br></br>
        <p align="center">Caio Sulz</p>
      </a>
    </td>

    
  <td valign="top">
      <a href="https://github.com/cwtshh" >
        <img align="center" height="100" src="https://github.com/cwtshh.png" />
        <br></br>
        <p align="center">Gustavo Costa</p>
      </a>
    </td>

  <td valign="top">
      <a href="https://github.com/arthurrsousa" >
        <img align="center" height="100" src="https://github.com/arthurrsousa.png" />
        <br></br>
        <p align="center">Arthur Rodrigues</p>
      </a>
    </td>

<td valign="top">
      <a href="https://github.com/FabricioDeQueiroz" >
        <img align="center" height="100" src="https://github.com/FabricioDeQueiroz.png" />
        <br></br>
        <p align="center">Fabrício Macedo</p>
      </a>
    </td>

  <td valign="top">
      <a href="https://github.com/rayenealmeida" >
        <img align="center" height="100" src="https://github.com/rayenealmeida.png" />
        <br></br>
        <p align="center">Rayene Ferreira</p>
      </a>
    </td>

  <td valign="top">
      <a href="https://github.com/nicollaxs" >
        <img align="center" height="100" src="https://github.com/nicollaxs.png" />
        <br></br>
        <p align="center">Nicollas Gabriel</p>
      </a>
    </td>

<td valign="top">
      <a href="https://github.com/matsuo-kage" >
        <img align="center" height="100" src="https://github.com/matsuo-kage.png" />
        <br></br>
        <p align="center">Manoel Castro</p>
      </a>
    </td>
    


  </tr>
</table>
