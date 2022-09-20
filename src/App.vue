<template>
  <div id="app">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReneeTrajar</title>
  </head>
  <body>
    <header class="header">
      <img src="./img/logo.png" title="reneetrajar" width="128" />
      <ul class="header-menu">
        <li><a href="#empresa">EMPRESA</a></li>
        <li><a href="#camisaria">CAMISARIA</a></li>
        <li><a href="#alfaiataria">ALFAIATARIA</a></li>
        <li><a href="#depoimentos">DEPOIMENTOS</a></li>
        <li><a href="#contato">CONTATO</a></li>
      </ul>
    </header>
    <main class="introducao">
      <div class="mensagem">
        <i class="elegante">Elegante é ter um</i>
        <div class="alfaiate">ALFAIATE</div>
        <i class="chamardeseu">para chamar de seu</i>
        <div class="comprehoje">
          COMPRE HOJE, <b>PAGUE EM ATÉ 3X COM 12% DE DESCONTO</b> E TENHA 10
          MESES PARA CONFECCIONAR!
        </div>
        <a href="#orcamento" class="link">FAÇA JÁ UM ORÇAMENTO</a>
      </div>
    </main>
    <section id="empresa" class="empresa">
      <div class="empresa-foto">
        <img src="./img/person_reneetrajar.png" width="350" />
      </div>
      <div class="empresa-mensagem">
        <div class="empresa-mensagem-titulo">Renee Trajar</div>
        <div class="empresa-mensagem-corpo-1">
          Com mais de 35 anos de experiência em camisas, calças e ternos sob
          medida, possuímos profissionais experientes e altamente
          qualificados.<br /><br />
          Cada cliente tem seu molde exclusivamente desenvolvido para seu
          biotipo através das medidas tiradas pelo próprio Sr. Renee, no
          escritório ou residência do cliente.
        </div>
        <div class="empresa-mensagem-corpo-2">
          “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe
          satisfação ao usar nossos produtos, aliado a um relacionamento franco
          e honesto, valorizando o ser humano.”
        </div>
        <div class="empresa-mensagem-corpo-3">Renee Trajar</div>
        <a href="#agendar" class="link">Agende uma visita</a>
      </div>
    </section>
    <section id="camisaria" class="camisaria">
      <div class="camisaria-mensagem">
        <div class="camisaria-mensagem-1">
          “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é
          impecável em todos os detalhes, desde a costura ao caimento. O Renee
          tem uma equipe de mestre!”
        </div>
        <div class="camisaria-mensagem-2">Nelson Garey</div>
        <div class="camisaria-mensagem-3">
          Advogado | Nelson Garay Advogados Associados
        </div>
      </div>
      <div class="camisaria-foto">
        <img src="./img/person_nelsongaray-1.png" width="250" />
        <div class="person_nelsongaray-overlay"></div>
      </div>
    </section>
    <section id="qualidades" class="qualidades">
      <div>
        <img src="./img/v_qualidade.png" />
        <p>QUALIDADE</p>
        <p>Camisaria e Alfaiataria 100% artesanal.</p>
      </div>
      <div>
        <img src="./img/v_confianca.png" />
        <p>CONFIANÇA</p>
        <p>Atendimento personalizado no escritório ou residência.</p>
      </div>
      <div>
        <img src="./img/v_experiencia.png" />
        <p>EXPERIÊNCIA</p>
        <p>Tradição e modernidade proporcionando elegância.</p>
      </div>
    </section>
    <section id="condicaoespecial" class="condicaoespecial">
      <div class="condicaoespecial-mensagem">
        <h2>Condição Imperdível</h2>
        <h4>Compre hoje e garanta:</h4>
        <p>12% de desconto e pagamento em até 3x sem juros;</p>
        <p>
          Até 10 meses para confeccionar sua roupa. Não se preocupe se suas
          medidas aumentaram ou diminuíram, estará sempre elegante;
        </p>
        <p>Condição muito especial por tempo limitado;</p>
        <p>Poder presentear alguém com uma roupa de alta costura, exclusiva.</p>
        <a href="#condicaoespecial" class="link link-1"
          >Garanta essa condição especial!</a
        >
      </div>
      <img src="./img/terno_1.png" />
    </section>
    <section id="alfaiataria" class="alfaiataria">
      <div class="alfaiataria-item">
        <div>
          <div class="border-2 m-l-50"></div>
          <img src="./img/camisaria.png" width="400" />
        </div>
        <div>
          <h2>Camisaria</h2>
          <p>Confeccionadas Artesanalmente</p>
          <ul>
            <li>100% Algodão</li>
            <li>Monograma</li>
            <li>Slim</li>
            <li>Nacionais e Importadas</li>
            <li>Tradicionais e Esportivas</li>
            <li>Casamentos</li>
          </ul>
          <div class="border-1 m-l-n60"></div>
          <a href="queroorcamento" class="link link-2">Quero um orçamento</a>
        </div>
      </div>
      <div class="alfaiataria-item">
        <div class="p-l">
          <h2>Alfaiataria</h2>
          <p>totalmente feito a mão sob medida</p>
          <ul>
            <li>Fio Super 120 e 130</li>
            <li>Lã fria Australiana</li>
            <li>Botões Importados</li>
            <li>Ternos e Calças</li>
            <li>Paletós e Smokings</li>
            <li>Sociais e Esportivos</li>
          </ul>
          <div class="border-1 m-l-n20"></div>
          <a href="queroorcamento" class="link link-2">Quero um orçamento</a>
        </div>
        <div>
          <div class="border-2 m-l-50"></div>
          <img src="./img/alfaiataria.png" width="400" />
        </div>
      </div>
    </section>
    <section id="depoimentos" class="depoimentos">
      <h2 class="depoimentos-mensagem-titulo">Depoimentos</h2>
      <ul class="carousel">
        <li class="active">
          <img src="./img/person_carousel_1.png" />
          <p>
            “Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por
            intermédio de meu pai, que já têm uma história de décadas com o
            querido Renee. O excelente atendimento antes e pós venda e a alta
            qualidade dos materiais usados colocam a Renee Trajar em um patamar
            acima dos demais do ramo.”
          </p>
          <p>William H. M. Garey</p>
          <p>Advogado | Nelson Garey Advogados Associados</p>
        </li>
        <li>
          <img src="./img/person_carousel_2.png" />
          <p>
            “Seu corte tanto de camisas, bem como de ternos são impecáveis,
            muitos dos meus amigos tem elogiado a vestimenta. Recomendo para
            quem gosta de perfeição. Estamos nos servindo do trabalho do Renee
            Trajar há mais de vinte anos.”
          </p>
          <p>Domingos Orestes Chiomento</p>
          <p>DOC Contabilidade Empresarial</p>
        </li>
        <li>
          <img src="./img/person_carousel_3.png" />
          <p>
            “Tenho a honra de afirmar que enquanto nossas vidas perdurarem o meu
            conceito é sempre melhor em relação ao Renee Trajar, sua pessoa, ao
            profissional competente e idôneo, sempre pontual, atencioso e
            preocupado em atender da melhor maneira os anseios de seus clientes,
            incluindo este signatário.”
          </p>
          <p>José Mauro Marques</p>
          <p>Advogado</p>
        </li>
        <li>
          <img src="./img/person_carousel_4.png" />
          <p>
            “Há mais de 10 anos sou cliente da Renee Trajar. A qualidade,
            caimento e possibilidade de customização das roupas, aliados ao
            excelente atendimento e prazo de entrega são fatores decisivos para
            mim.”
          </p>
          <p>Custódio Pereira</p>
          <p>
            Membro do CONSOCIAL - Conselho Superior de Responsabilidade Social
            da FIESP-SP
          </p>
        </li>
      </ul>
      <div class="carousel-slider">
        <input name="slide" type="radio" value="0" />
        <input name="slide" type="radio" value="1" checked />
        <input name="slide" type="radio" value="2" />
        <input name="slide" type="radio" value="3" />
      </div>
      <div class="carousel-arrow carousel-arrow-left"></div>
      <div class="carousel-arrow carousel-arrow-right"></div>
    </section>
    <section id="contato" class="contato">
      <h2 class="contato-titulo">Contato</h2>
      <div class="contato-corpo">
        <div>
          <h3>Telefones</h3>
          <p>+55 (11) 3088-0757</p>
          <h3>Email</h3>
          <p>renee@reneetrajar.com.br</p>
          <h3>Atendimento Personalizado</h3>
          <a href="#atendimentopersonalizado" class="link link-3"
            >Clique aqui!</a
          >
        </div>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="E-Mail" />
          <textarea placeholder="Mensagem" multi-line></textarea>
          <a href="#enviarmensagem" class="link link-2">Enviar Mensagem</a>
        </form>
      </div>
    </section>
    <footer class="footer">
      <div class="footer-logo">
        <img src="./img/logo_footer.png" width="120" />
        <p>CNPJ:04.487.685/0001-01</p>
      </div>
      <div class="footer-texto">
        Copyright: 2021 © Renee Trajar - Todos os direitos reservados.
      </div>
    </footer>
  </body>
  </div>
</template>
<style>
  @import './css/alfaiataria.css';
  @import './css/camisaria.css';
  @import './css/condicaoespecial.css';
  @import './css/contato.css';
  @import './css/depoimentos.css';
  @import './css/empresa.css';
  @import './css/footer.css';
  @import './css/global.css';
  @import './css/introducao.css';
  @import './css/menu.css';
  @import './css/qualidades.css';
</style>