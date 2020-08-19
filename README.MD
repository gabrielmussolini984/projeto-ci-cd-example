# Aprendendo sobre CI/CD 🚀

_Aprendendo um pouco sobre CI e CD, utilizando Cloud Build para fazer os gatilhos, fazendo o deploy no Cloud Run ou no Kubenetes Engine_

## Arquivos de configurações 🔧

### Dev
_Ao fazer o push para um branch, é rodado os steps desse arquivo, se todos processos rodarem, o PR é permitido._


### Deploy
_Abrindo o PR para master existe duas maneiras de colocar os processos em produção, o primeiro é com o cloud run e o segundo com no Kubernetes Engine_

#### Cloud Run
_Ao fazer o PR inicia os setps do arquivo cloudbuild.run.yaml, passando todos steps o deploy é feito automaticamente no Cloud Run_

#### Kubernetes Engine
_Ao fazer o PR inicia os steps do arquivo cloudbuild.k8s.yaml, passando todos stepts o deploy é feito no Kubernetes Engine, com as configurações do arquivo k8s.yaml_


## Próximos Passos 🏃

* Aprender a fazer os passos de CI com Jenkins.
* Aprofundar mais sobre orquestração de containers com Kubernetes e Docker Swarm.
* Fazer o processo de CI CD em outros provedores, como a AWS e Azure.

---
⌨️ com ❤️ por [Gabriel](https://github.com/gabrielmussolini984) 😊