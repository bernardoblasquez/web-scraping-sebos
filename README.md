# web-scraping-sebos
Programa inspirado no meu projeto final, no curso de Ciencia da computação : "Varejo de produtos e mercados de cauda longa: Um estudo de caso sobre a Estante Virtual".  O objetivo deste trabalho é refazer o antigo programa em javascript, utilizando o Puppeteer ( https://github.com/puppeteer/puppeteer) e crir uma base de dados que depois vai ser usada em outras aplicações.

# Histórico
O projeto final tinha o objetivo de estudar o impacto do Estante Virtual (https://www.estantevirtual.com.br/) para os negócios dos sebos. Para ajudar na pesquisa foi desenvolvido um programa que pegava, de forma automática, dados sobre sebos no site da Estante Virtual e que também enviava um questionário para os donos desses sebos. O objetivos do questionario era pegar outras estatisticas qua não eram possiveis através somente do site. 

No período do projeto final, programa tinha sido desenvolvido em java, utilizando selenium IDE e o webdriver. A maior preocupação da aplicação, naquela época, era pegar dados sobre a ditribuição dos sebos pelo país e comparar com a distribuição de livrarias. Foi dada pouca atenção a análise do acervo dos sebos e as avaliações dos usuários sobre esses sebos. 

# Objetivo
Desenvolver um programa similar ao desenvolvido na época do projeto final, mas sem a parte de envio de questionários para os donos dos sebos. O foco principal aqui é criar estatisticas mais solidas sobre os sebos e estruturar melhor os dados, que serão salvos em um JSON, inicialmente, já que não está sendo utilizado nenhum banco de dados. Dessa forma:
 - [concluido] o objetivo inicial é pegar os dados mais gerais dos sebos: (nome, acervo total, link para página do sebo e sua localização (estado e cidade)) e salvar esses dados em JSON.
 
 Depois de concluido os objetivos acima, o objetivo será pegar dados mais específicos sobre os sebos:
 - [em andamento] avaliações positivas sobre o sebo
 - total de avaliaçãoes sobre o sebo na epoca do acesso
 - acervo do sebo

# Tecnologia e como rodar o Projeto [Em desenvolvimento]
Primeiro é necessário instalar o Puppeteer:
 - npm i puppeteer

 Depois de instalado o Peppeteer basta executar o arquivo:
 - node wsEstanteVirtual.js

# Como está organizado o programa:
- em breve
