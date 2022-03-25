# Modulo de Git

## Aula 8 - Versionamento de código 21/03/2022

- introdução ao git e github. 
- versionamento de código.

## Aula 9 - Versionamento de código 22/03/2022

- criação de conta.
- criação de repositorio.

## Aula 10 - Comando git 23/03/2022

Comandos local: 
- git init
- git add .
- git commit -m "mensagem"

Comandos Remoto:

- git remote "nomeQualquer" "linkDoRepositorio" "branch"
- git push -u "nomeColocadoNoRemoto" "branch"

Outros comando: 

- git log
- git rm --checkout
- git status
- git clone "linkDoRepositorio"
- git branch -M "nomeBranch"
<<<<<<< HEAD

## Comandos do Git 2 - 24/03/2022

Branch:
- Ramificações do seu código.
- git branch "nomeDaBranch" (para criar uma branch)
- git branch -d "nomeDaBranch" (para deletar uma branch)
- git checkout "nomeDaBranch" (Para andar pelas branch)

Merge: 
- Mesclar branch 
- git merge "nomeDaBranch" -m "comentario"