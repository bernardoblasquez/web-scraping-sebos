# web-scraping-sebos
Programa inspirado no meu projeto final: "Varejo de produtos e mercados de cauda longa: Um estudo de caso sobre a Estante Virtual".  O objetivo deste trabalho é refazer o antigo programa em javascript, utilizando o Puppeteer ( https://github.com/puppeteer/puppeteer) e ir além (sim, esses objetivos vão evoluir ao longo do tempo, rs).


# Histórico
O projeto final tinha o objetivo de estudar o impacto do Estante Virtual (https://www.estantevirtual.com.br/) para os negócios dos sebos. Para ajudar na pesquisa foi desenvolvido um programa que pegava, de forma automática, dados sobre sebos no site da Estante Virtual e enviava um questionário para os donos desses sebos. O objetivos do questionario era pegar outras estatisticas qua não eram possiveis atraves somente do site.

Na época o programa tinha sido desenvolvido em java, utilizando selenium.

# Objetivo
Desnvolver um programa similar ao desenvolvido na época do projeto final, mas sem a parte de envio de questionários para os donos dos sebos. O foco principal aqui é criar estatisticas mais solidas sobre os sebos e estruturar melhor os dados, que provavelmente serão salvos em um JSON. 

Muito mais coisas são possívei com o pupeteer e conforme o conhecimento sobre a ferramenta for aumentando, mais objetivos aparecerão ;) .

# Como rodar o Projeto

Primeiro é necessário instalar o Puppeteer:
 - npm i puppeteer

 Depois de instalado o Peppeteer basta executar o arquivo:
 - node wsEstanteVirtual.js
