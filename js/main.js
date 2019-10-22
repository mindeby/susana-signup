document.addEventListener('DOMContentLoaded', () => { //wait until everything loaded

let pt = document.getElementById('pt');
let en = document.getElementById('en');
let button = document.getElementById('participate');
let titulo = document.getElementById('titulo');
let p1 = document.getElementById('first_p');
let p2 = document.getElementById('second_p');
let quote = document.getElementById('quote');

  pt.style.textDecoration ="underline";


  en.addEventListener("click", function(e){
    pt.style.textDecoration ="none";
    en.style.textDecoration ="underline";
    titulo.innerHTML = "Wolf's howling";
    quote.innerHTML = `"Exaggerated intellectualization hides wild women's models and women's instinctive nature." Clarissa Pinkola Estés`;
    p1.innerHTML = "In a cathartic movement to introduce myself to the world through the intuited lines in this book, I give voice to my wild woman, release archived memories of the feminine, inspire my equals, publicly exercise my role as an individual, and strengthen myself in my own image.";
    p2.innerHTML = `Join this movement and submit your video with your favorite passage from the book "Women who Run with the Wolves". To find out how to be one of the Wolves and give your voice to this project, send us an email to <a href="mailto:uivardaloba@gmail.com?subject= Enrollment email&body= Hello Wolf,%0D%0A%0D%0AThank you for your interest in contributing with your howl to the project Uivar da Loba (Howl of the Wolf).%0D%0AWhen we howl together, our voice has more reach.%0D%0A%0D%0AHow to record your video:%0D%0A%0D%0AYour video must have the reading of an excerpt of the book 'Women that run with the Wolfs'.%0D%0AIMPORTANT: The reading must be done in its entirety and faithful to the book.%0D%0AYour video must have a minimum of 1 minute and a maximum of 3 minutes.%0D%0AThe video must be recorded in VERTICAL, with the size/resolution 9:15 or Full.%0D%0AThe reading audio should be noticeable.%0D%0AAvoid recording in a cellphone and send it to another one through platforms like Whatsapp. Keep reading and we tell you how to send it to us.%0D%0AHow to send your video:%0D%0A%0D%0AChange the name of the file to your Name and Surname%0D%0AUpload the file to your Drive (Tutorial in PDF)%0D%0ASend us the sharing link through email, with the requested information (next section).%0D%0A  NOTE: We are sending you a PDF tutorial to record the video and upload it to the Drive.%0D%0A%0D%0AWHAT WOLF AM I: %0D%0A%0D%0AAnswer these questions on your email or in-line. %0D%0A%0D%0AYour contribution will be shared on Instagram @uivardaloba. Therefore, we need you to answer to the following formulary.%0D%0A%0D%0AFull name:%0D%0ANationality:%0D%0AAge:%0D%0ACountry and city (residence):%0D%0AInstagram profile:%0D%0AHow do you describe yourself the Woman Journey? Who are you?%0D%0A%0D%0AWHAT READING HUNCH:%0D%0A%0D%0AHere you must add all the book information where is the excerpt of the book you read in your video.%0D%0A%0D%0A%0D%0AEdition (country):%0D%0APublisher:%0D%0AYear of publishing: %0D%0AChapter:%0D%0APage:%0D%0A%0D%0AIn case you feel uncomfortable with the sharing of any of this information in the post of your video, let us know. The respect between Wolfs is natural around here. %0D%0A%0D%0ALink (add the sharing link of your video):%0D%0A%0D%0AAho,%0D%0AUivar da Loba">uivardaloba@gmail.com</a> or click the button.`
    button.innerHTML = `<h3><a href="mailto:uivardaloba@gmail.com?subject= Enrollment email&body= Hello Wolf,%0D%0A%0D%0AThank you for your interest in contributing with your howl to the project Uivar da Loba (Howl of the Wolf).%0D%0AWhen we howl together, our voice has more reach.%0D%0A%0D%0AHow to record your video:%0D%0A%0D%0AYour video must have the reading of an excerpt of the book 'Women that run with the Wolfs'.%0D%0AIMPORTANT: The reading must be done in its entirety and faithful to the book.%0D%0AYour video must have a minimum of 1 minute and a maximum of 3 minutes.%0D%0AThe video must be recorded in VERTICAL, with the size/resolution 9:15 or Full.%0D%0AThe reading audio should be noticeable.%0D%0AAvoid recording in a cellphone and send it to another one through platforms like Whatsapp. Keep reading and we tell you how to send it to us.%0D%0AHow to send your video:%0D%0A%0D%0AChange the name of the file to your Name and Surname%0D%0AUpload the file to your Drive (Tutorial in PDF)%0D%0ASend us the sharing link through email, with the requested information (next section).%0D%0A  NOTE: We are sending you a PDF tutorial to record the video and upload it to the Drive.%0D%0A%0D%0AWHAT WOLF AM I: %0D%0A%0D%0AAnswer these questions on your email or in-line. %0D%0A%0D%0AYour contribution will be shared on Instagram @uivardaloba. Therefore, we need you to answer to the following formulary.%0D%0A%0D%0AFull name:%0D%0ANationality:%0D%0AAge:%0D%0ACountry and city (residence):%0D%0AInstagram profile:%0D%0AHow do you describe yourself the Woman Journey? Who are you?%0D%0A%0D%0AWHAT READING HUNCH:%0D%0A%0D%0AHere you must add all the book information where is the excerpt of the book you read in your video.%0D%0A%0D%0A%0D%0AEdition (country):%0D%0APublisher:%0D%0AYear of publishing: %0D%0AChapter:%0D%0APage:%0D%0A%0D%0AIn case you feel uncomfortable with the sharing of any of this information in the post of your video, let us know. The respect between Wolfs is natural around here. %0D%0A%0D%0ALink (add the sharing link of your video):%0D%0A%0D%0AAho,%0D%0AUivar da Loba">Participate</a></h3>`;
  });

  pt.addEventListener("click", function(e){
    en.style.textDecoration ="none";
    pt.style.textDecoration ="underline";
    titulo.innerHTML = "Uivar da Loba";
    quote.innerHTML = `"A intelectualização exagerada oculta os modelos da mulher selvagem e a natureza instintiva das mulheres." Clarissa Pinkola Estés`;
    p1.innerHTML = "Num movimento catártico de me apresentar ao mundo através das linhas intuídas nesse livro, eu dou voz à minha mulher selvagem, liberto memórias arquivadas do feminino, inspiro minhas iguais, exerço publicamente meu protagonismo como indivíduo e me fortaleço em minha própria imagem.";
    p2.innerHTML = `Junte-se a este movimento e envie o seu vídeo com a sua passagem preferida do livro “Mulheres que correm com os lobos”. Para saber como ser uma das Lobas e dar a sua voz a este projecto, envie-nos um email para <a href="mailto:uivardaloba@gmail.com?subject= Inscrição Uivar da Loba&body= Olá Loba,%0D%0A%0D%0AObrigada pelo interesse em contribuir com o seu uivo para a plataforma Uivar da Loba.%0D%0AQuando uivamos juntas a nossa voz tem mais alcance.%0D%0A%0D%0AComo gravar o seu vídeo:%0D%0A%0D%0AO seu vídeo deve conter a leitura de uma passagem do livro “Mulheres que Correm com os Lobos”%0D%0AIMPORTANTE: a leitura deve ser feita na íntegra e fiel ao que está à obra.%0D%0AO seu vídeo deve conter no mínimo 1 min. e no máximo 3 min.%0D%0ADeve ser gravado na VERTICAL, no tamanho/resolução 9:16 ou Full.%0D%0AO áudio da leitura deve ser perceptível.%0D%0AEvite gravar de um telemóvel e enviar para outro através de plataformas como Whatsapp ou similares, para que não perca qualidade.%0D%0AComo enviar o seu vídeo:%0D%0A%0D%0AMudar o nome do ficheiro e colocar o seu Primeiro e Último Nome%0D%0AFazer upload para a sua Drive%0D%0AEnviar-nos o link de partilha do ficheiro por email, com os dados abaixo solicitados.%0D%0A%0D%0AQUE LOBA SOU:%0D%0A%0D%0AResponda a essas perguntas no seu email, ou indica à frente em resposta in-line.%0D%0A%0D%0AO seu contributo será partilhado no Instagram @uivardaloba, e para tal precisamos que responda ao formulário que segue.%0D%0A%0D%0ANome completo:%0D%0ANacionalidade:%0D%0AIdade:%0D%0APaís e cidade de residência actual:%0D%0APerfil de Instagram:%0D%0AComo se descreve neste momento da jornada de Mulher? Quem é você?%0D%0A%0D%0AQUE LEITURA INTUI:%0D%0A%0D%0AAqui deve colocar todas as informações do livro onde consta a passagem lida no seu vídeo.%0D%0A%0D%0A%0D%0AEdição (país):%0D%0AEditora:%0D%0AAno de publicação:%0D%0ACapítulo:%0D%0APágina:%0D%0A%0D%0ACaso se sinta desconfortável com a publicação de qualquer dessas informações no post do seu vídeo, é só avisar-nos. O respeito entre Lobas é natural por aqui.%0D%0A%0D%0ALink (aqui deve colocar o link do ficheiro do seu vídeo):%0D%0A%0D%0AAho,%0D%0AUivar da Loba">uivardaloba@gmail.com</a> ou clique no botão.`
    button.innerHTML = `<h3><a href="mailto:uivardaloba@gmail.com?subject= Inscrição Uivar da Loba&body= Olá Loba,%0D%0A%0D%0AObrigada pelo interesse em contribuir com o seu uivo para a plataforma Uivar da Loba.%0D%0AQuando uivamos juntas a nossa voz tem mais alcance.%0D%0A%0D%0AComo gravar o seu vídeo:%0D%0A%0D%0AO seu vídeo deve conter a leitura de uma passagem do livro “Mulheres que Correm com os Lobos”%0D%0AIMPORTANTE: a leitura deve ser feita na íntegra e fiel ao que está à obra.%0D%0AO seu vídeo deve conter no mínimo 1 min. e no máximo 3 min.%0D%0ADeve ser gravado na VERTICAL, no tamanho/resolução 9:16 ou Full.%0D%0AO áudio da leitura deve ser perceptível.%0D%0AEvite gravar de um telemóvel e enviar para outro através de plataformas como Whatsapp ou similares, para que não perca qualidade.%0D%0AComo enviar o seu vídeo:%0D%0A%0D%0A
    Mudar o nome do ficheiro e colocar o seu Primeiro e Último Nome%0D%0AFazer upload para a sua Drive%0D%0AEnviar-nos o link de partilha do ficheiro por email, com os dados abaixo solicitados.%0D%0A%0D%0AQUE LOBA SOU:%0D%0A%0D%0A
    Responda a essas perguntas no seu email, ou indica à frente em resposta in-line.%0D%0A%0D%0AO seu contributo será partilhado no Instagram @uivardaloba, e para tal precisamos que responda ao formulário que segue.%0D%0A%0D%0ANome completo:%0D%0ANacionalidade:%0D%0AIdade:%0D%0APaís e cidade de residência actual:%0D%0APerfil de Instagram:%0D%0AComo se descreve neste momento da jornada de Mulher? Quem é você?%0D%0A%0D%0AQUE LEITURA INTUI:%0D%0A%0D%0A
    Aqui deve colocar todas as informações do livro onde consta a passagem lida no seu vídeo.%0D%0A%0D%0A%0D%0AEdição (país):%0D%0AEditora:%0D%0AAno de publicação:%0D%0ACapítulo:%0D%0APágina:%0D%0A%0D%0ACaso se sinta desconfortável com a publicação de qualquer dessas informações no post do seu vídeo, é só avisar-nos. O respeito entre Lobas é natural por aqui.%0D%0A%0D%0A
    Link (aqui deve colocar o link do ficheiro do seu vídeo):%0D%0A%0D%0AAho,%0D%0AUivar da Loba">Participar</a></h3>`;
  });


});
