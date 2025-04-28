// Dados da base de conhecimento sobre a FURIA
const furiaData = {
    historia: {
        fundacao: "A FURIA (anteriormente estilizada como FURIA Esports) é uma organização brasileira de esports fundada em agosto de 2017 por Jaime Pádua (empresário), André Akkari (jogador profissional de poker) e Cris Guedes.",
        crescimento: "A equipe rapidamente se destacou no cenário competitivo, especialmente em CS:GO, onde fez sua primeira aparição em um Major apenas dois anos após sua fundação, no IEM Katowice Major 2019.",
        reconhecimento: "Em 2022, a FURIA foi nomeada a quinta organização de esports mais bem-sucedida do mundo pelo portal norte-americano Nerd Street.",
        atualidade: "Em maio de 2024, a FURIA foi incluída no Programa de Suporte a Clubes da Esports World Cup Foundation, financiada pelo Fundo de Investimento Público da Arábia Saudita."
    },
    modalidades: [
        "Counter-Strike: Global Offensive (CS:GO)",
        "League of Legends (LoL)",
        "Valorant",
        "Rainbow Six Siege",
        "Rocket League",
        "Apex Legends",
        "Kings League"
    ],
    csgo: {
        historia: "A equipe de CS:GO da FURIA fez sua primeira aparição em um Major apenas dois anos após sua fundação, no IEM Katowice Major 2019. Continuou melhorando ao longo do ano, desafiando a MIBR como a melhor equipe do Brasil. Foi a equipe com melhor classificação da região das Américas no PGL Major Stockholm 2021. Alcançou as semifinais do IEM Rio Major 2022, sua melhor colocação em um Major até então.",
        conquistas: [
            "No CS: ",
            "1º lugar — ESL Pro League Season 12: North America",
            "1º lugar — Elisa Masters Espoo 2023",
            "1º lugar — DreamHack Masters Spring 2020: North America",
            "1º lugar — Arctic Invitational 2019",
            "3º/4º lugar — IEM Rio Major 2022",
            "3º/4º lugar — Intel Extreme Masters Season XVII - Dallas",
            "3º/4º lugar — ESL Pro League Season 15",
            "5º-8º lugar — PGL Major Antwerp 2022",
            "5º-8º lugar — PGL Major Stockholm 2021",
        ],
        jogadores: [
            {
                nome: "Gabriel 'FalleN' Toledo",
                nacionalidade: "Brasil",
                funcao: "AWPer / In-game Leader",
                apelidos: ["fallen", "professor", "awper"],
                descricao: "Veterano lendário do CS brasileiro, conhecido como 'O Professor' e considerado um dos melhores AWPers e líderes da história do CS brasileiro."
            },
            {
                nome: "Marcelo 'chelo' Cespedes",
                nacionalidade: "Brasil",
                funcao: "Rifler",
                apelidos: ["chelo"],
                descricao: "Rifler experiente que se juntou à FURIA vindo da MIBR, conhecido por sua consistência e habilidade com rifles."
            },
            {
                nome: "Yuri 'yuurih' Santos",
                nacionalidade: "Brasil",
                funcao: "Rifler / Entry Fragger",
                apelidos: ["yuurih"],
                descricao: "Um dos talentos mais consistentes da equipe, conhecido por seu alto nível de habilidade mecânica e capacidade de abrir bombsites."
            },
            {
                nome: "Felipe 'skullz' Medeiros",
                nacionalidade: "Brasil",
                funcao: "Rifler / Support",
                apelidos: ["skullz"],
                descricao: "Jovem promessa do cenário brasileiro, conhecido por seu potencial e adaptabilidade em diferentes funções."
            },
            {
                nome: "Kaike 'KSCERATO' Cerato",
                nacionalidade: "Brasil",
                funcao: "Rifler / Lurker",
                apelidos: ["kscerato"],
                descricao: "Estrela da equipe e um dos melhores jogadores do Brasil, conhecido por sua precisão excepcional e tomada de decisões inteligente."
            }
        ],
        funcoes: {
            "awper": "O AWPer é o jogador especializado em usar o rifle de precisão AWP, uma das armas mais poderosas do jogo. Na FURIA, essa função é desempenhada principalmente por Gabriel 'FalleN' Toledo.",
            "rifler": "Os Riflers são jogadores que utilizam principalmente rifles como AK-47 e M4A4. Na FURIA, Marcelo 'chelo' Cespedes, Yuri 'yuurih' Santos, Felipe 'skullz' Medeiros e Kaike 'KSCERATO' Cerato desempenham essa função.",
            "entry fragger": "O Entry Fragger é o primeiro jogador a entrar em um bombsite para abrir espaço para o time. Na FURIA, Yuri 'yuurih' Santos desempenha essa função.",
            "support": "O Support é o jogador que dá suporte aos demais com utilitários como granadas e flashes. Na FURIA, Felipe 'skullz' Medeiros desempenha essa função.",
            "lurker": "O Lurker é o jogador que se separa do grupo para surpreender os adversários por trás. Na FURIA, Kaike 'KSCERATO' Cerato desempenha essa função.",
            "in-game leader": "O In-game Leader (IGL) é o líder tático da equipe, responsável por coordenar as estratégias durante o jogo. Na FURIA, Gabriel 'FalleN' Toledo desempenha essa função."
        },
        proximosJogos: "Para informações atualizadas sobre os próximos jogos da FURIA, recomendamos verificar o site oficial da FURIA ou plataformas como HLTV.org e Liquipedia."
    },
    lol: {
        historia: "A FURIA entrou na cena de League of Legends com a aquisição do roster da Uppercut Esports para formar a Furia Uppercut no CBLOL. A equipe anunciou que mudaria seu nome para Furia Esports após a conclusão do torneio CBLOL 2020 Split 1.",
        jogadores: [
            {
                nome: "Guigo (Guilherme Ruiz)",
                nacionalidade: "Brasil",
                funcao: "Jogador",
                descricao: "Jogador brasileiro de League of Legends que atua pela FURIA no CBLOL."
            },
            {
                nome: "Tatu (Pedro Seixas)",
                nacionalidade: "Brasil",
                funcao: "Jogador",
                descricao: "Jogador brasileiro de League of Legends que faz parte do roster atual da FURIA."
            },
            {
                nome: "Tutsz (Arthur Peixoto Machado)",
                nacionalidade: "Brasil",
                funcao: "Jogador",
                descricao: "Jogador brasileiro de League of Legends que integra a equipe da FURIA."
            },
            {
                nome: "Ayu (Andrey Saraiva)",
                nacionalidade: "Brasil",
                funcao: "Jogador",
                descricao: "Jogador brasileiro de League of Legends que atua pela FURIA."
            },
            {
                nome: "JoJo (Gabriel Dzelme de Oliveira)",
                nacionalidade: "Brasil",
                funcao: "Jogador",
                descricao: "Jogador brasileiro de League of Legends que completa o roster atual da FURIA."
            }
        ]
    },
    valorant: {
        historia: "A FURIA anunciou sua entrada na cena de Valorant em 21 de janeiro de 2021. A equipe participou do inaugural Valorant Champions 2021, mas foi eliminada na fase de grupos. Retornou para o Valorant Champions 2022, mas terminou o campeonato na mesma posição. No final de 2022, a Riot Games confirmou que a FURIA receberia uma vaga de franquia no sistema de ligas internacionais de VALORANT.",
        jogadores: [
            {
                nome: "Rafael 'raafa' Lima",
                nacionalidade: "Brasil",
                funcao: "Jogador",
                descricao: "Jogador brasileiro de Valorant que atua pela FURIA."
            },
            {
                nome: "Olavo 'heat' Marcelo",
                nacionalidade: "Brasil",
                funcao: "Jogador",
                descricao: "Um dos principais jogadores da equipe de Valorant da FURIA."
            },
            {
                nome: "Ilan 'havoc' Eloy",
                nacionalidade: "Brasil",
                funcao: "Jogador",
                descricao: "Jogador brasileiro de Valorant que faz parte do roster atual da FURIA."
            },
            {
                nome: "Khalil 'Khalil' Schmidt",
                nacionalidade: "Brasil",
                funcao: "Jogador",
                descricao: "Jogador brasileiro que integra a equipe de Valorant da FURIA."
            },
            {
                nome: "Luis-Henrique 'pryze' Viveiros",
                nacionalidade: "Brasil",
                funcao: "Jogador",
                descricao: "Jogador recentemente contratado para substituir mwzera no elenco de Valorant da FURIA."
            }
        ]
    },
    rainbowSix: {
        historia: "A FURIA mantém uma equipe competitiva de Rainbow Six Siege que tem participado de diversos torneios importantes, incluindo o Six Invitational e Majors da modalidade.",
        jogadores: [
            {
                nome: "Diego 'Kheyze' Zanello",
                nacionalidade: "Brasil",
                funcao: "Jogador",
                descricao: "Jogador brasileiro de Rainbow Six Siege que atua pela FURIA."
            },
            {
                nome: "João 'Jv92' Vitor",
                nacionalidade: "Brasil",
                funcao: "Jogador",
                descricao: "Jogador brasileiro de Rainbow Six Siege que faz parte do roster atual da FURIA."
            },
            {
                nome: "Felipe 'FelipoX' De Lucia",
                nacionalidade: "Brasil",
                funcao: "Jogador",
                descricao: "Jogador brasileiro de Rainbow Six Siege que integra a equipe da FURIA."
            },
            {
                nome: "Gustavo 'HerdsZ' Herdina",
                nacionalidade: "Brasil",
                funcao: "Jogador",
                descricao: "Jogador brasileiro de Rainbow Six Siege que atua pela FURIA."
            },
            {
                nome: "Felipe 'nade' Sá Ferreira",
                nacionalidade: "Brasil",
                funcao: "Jogador",
                descricao: "Jogador brasileiro de Rainbow Six Siege que completa o roster atual da FURIA."
            }
        ],
        conquistas: [
            "No R6: ",
            "3-4º lugar — Esports World Cup 2024",
            "5-8º lugar — Blast R6 Major Manchester 2024",
            "5-8º lugar — Six Berlin Major 2022",
            "9-12º lugar — Six Invitational 2022",
            "5-8º lugar — Six Mexico Major 2022",
            "9-12º lugar — Six Invitational 2021"
        ],
    },
    kingsLeague: {
        historia: "A FURIA FC é um dos times confirmados para a primeira edição da Kings League Brasil, contando com Neymar Jr. e Cris Guedes como presidentes. A equipe já participou do Mundial de Clubes da modalidade em 2024, quando contou com o craque Falcão como presidente ao lado de Allan, o Estagiário.",
        jogadores: [
            {
                nome: "Victor Hugo",
                nacionalidade: "Brasil",
                funcao: "Goleiro",
                descricao: "Goleiro da equipe FURIA FC na Kings League Brasil."
            },
            {
                nome: "Matheus Ayosa",
                nacionalidade: "Brasil",
                funcao: "Goleiro",
                descricao: "Goleiro reserva da FURIA FC na Kings League Brasil."
            },
            {
                nome: "João Pellegrini",
                nacionalidade: "Brasil",
                funcao: "Defensor",
                descricao: "Defensor da equipe FURIA FC na Kings League Brasil."
            },
            {
                nome: "Andrey Wurthmann",
                nacionalidade: "Brasil",
                funcao: "Meio-campo",
                descricao: "Meio-campista da FURIA FC na Kings League Brasil."
            },
            {
                nome: "Matheus de Oliveira",
                nacionalidade: "Brasil",
                funcao: "Meio-campo",
                descricao: "Meio-campista da equipe FURIA FC na Kings League Brasil."
            },
            {
                nome: "Caio Carvalho",
                nacionalidade: "Brasil",
                funcao: "Meio-campo",
                descricao: "Meio-campista da FURIA FC na Kings League Brasil."
            },
            {
                nome: "Guilherme Monagatti",
                nacionalidade: "Brasil",
                funcao: "Atacante",
                descricao: "Atacante da equipe FURIA FC na Kings League Brasil."
            },
            {
                nome: "Gabriel Pastuch",
                nacionalidade: "Brasil",
                funcao: "Atacante",
                descricao: "Atacante da FURIA FC na Kings League Brasil."
            },
            {
                nome: "Ryan Lima",
                nacionalidade: "Brasil",
                funcao: "Atacante",
                descricao: "Atacante da equipe FURIA FC na Kings League Brasil."
            },
            {
                nome: "Murillo Donato",
                nacionalidade: "Brasil",
                funcao: "Atacante",
                descricao: "Atacante da FURIA FC na Kings League Brasil."
            }
        ],
        presidentes: [
            {
                nome: "Neymar Jr.",
                descricao: "Jogador de futebol profissional e presidente da FURIA FC na Kings League Brasil."
            },
            {
                nome: "Cris Guedes",
                descricao: "Co-fundador da FURIA Esports e co-presidente da FURIA FC na Kings League Brasil."
            }
        ]
    },
    organizacao: {
        membros: [
            "Jaime Pádua (Co-Fundador, Co-Proprietário, Co-CEO)",
            "André Akkari (Co-Fundador, Co-Proprietário, Co-CEO)",
            "Cristian Guedes (Co-Fundador, Co-Proprietário, Gerente de Marketing e RP)",
            "Nicholas Nogueira 'guerri' (Co-Fundador, Co-Proprietário, Chefe de Esports)"
        ],
        patrocinadores: [
            "Adidas",
            "Red Bull",
            "Lenovo",
            "PokerStars",
            "Hellmann's",
            "Betnacional",
            "Cruzeiro do Sul"
        ]
    },
    curiosidades: [
        "A FURIA tem uma das maiores torcidas do Brasil no cenário de esports.",
        "O nome 'FURIA' representa a paixão e a intensidade com que a organização aborda os esports.",
        "A FURIA foi uma das primeiras organizações brasileiras a estabelecer uma gaming house nos Estados Unidos para seus jogadores de CS:GO.",
        "A parceria com a Adidas foi um marco importante para a organização e para os esports brasileiros.",
        "A FURIA tem investido em diversas modalidades além dos jogos tradicionais, incluindo a Kings League.",
        "Neymar Jr. é presidente da FURIA FC na Kings League Brasil, mostrando a conexão da organização com grandes nomes do esporte tradicional.",
        "A FURIA é uma das poucas organizações brasileiras com equipes competitivas em mais de sete modalidades diferentes de esports."
    ]
};

// Inicialização do chat
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const suggestionBtns = document.querySelectorAll('.suggestion-btn');
    
    // Carregar imagem do logo
    loadLogo();
    
    // Mensagem de boas-vindas
    addBotMessage(`Olá! Sou o FURIA Bot, seu assistente virtual sobre a FURIA Esports. 
                  Estou aqui para responder suas perguntas sobre a organização, incluindo os times de CS:GO, Valorant, Rainbow Six, Kings League e outras modalidades.
                  Como posso ajudar você hoje? Você pode clicar em uma das sugestões abaixo ou digitar sua própria pergunta.`);
    
    // Event listeners
    sendBtn.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
    
    suggestionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            userInput.value = question;
            handleUserInput();
        });
    });
    
    // Função para carregar o logo
    function loadLogo() {
        const logoImg = document.getElementById('logo-img');
        logoImg.onerror = function() {
            // Se a imagem não carregar, usar um texto alternativo
            this.style.display = 'none';
            document.querySelector('.logo h1').style.marginLeft = '0';
        };
        // Tentar carregar a imagem do logo
        logoImg.src = 'images/furia-logo.png';
    }
    
    // Função para lidar com a entrada do usuário
    function handleUserInput() {
        const userMessage = userInput.value.trim();
        if (userMessage === '') return;
        
        // Adicionar mensagem do usuário ao chat
        addUserMessage(userMessage);
        
        // Limpar campo de entrada
        userInput.value = '';
        
        // Processar a mensagem e gerar resposta
        setTimeout(() => {
            const botResponse = processUserMessage(userMessage);
            addBotMessage(botResponse);
            
            // Rolar para a mensagem mais recente
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);
    }
    
    // Adicionar mensagem do usuário ao chat
    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user-message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        
        // Rolar para a mensagem mais recente
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Adicionar mensagem do bot ao chat
    function addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'bot-message');
        
        // Converter links em âncoras clicáveis
        message = message.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
        
        messageElement.innerHTML = message;
        chatMessages.appendChild(messageElement);
        
        // Rolar para a mensagem mais recente
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Processar a mensagem do usuário e gerar resposta
    function processUserMessage(message) {
        const originalMessage = message;
        message = message.toLowerCase();
        
        // Verificar perguntas sobre modalidades específicas
        if (containsKeywords(message, ['valorant', 'vava']) && 
            containsKeywords(message, ['jogadores', 'atletas', 'roster', 'elenco', 'time', 'equipe'])) {
            let response = "O roster atual da equipe de Valorant da FURIA é composto por:\n\n";
            furiaData.valorant.jogadores.forEach(jogador => {
                response += `🇧🇷 ${jogador.nome} - ${jogador.funcao}\n${jogador.descricao}\n\n`;
            });
            return response;
        }
        
        if (containsKeywords(message, ['rainbow', 'r6', 'siege', 'six']) && 
            containsKeywords(message, ['jogadores', 'atletas', 'roster', 'elenco', 'time', 'equipe'])) {
            let response = "O roster atual da equipe de Rainbow Six Siege da FURIA é composto por:\n\n";
            furiaData.rainbowSix.jogadores.forEach(jogador => {
                response += `🇧🇷 ${jogador.nome} - ${jogador.funcao}\n${jogador.descricao}\n\n`;
            });
            return response;
        }
        
        if (containsKeywords(message, ['kings', 'league', 'futebol', 'soccer']) && 
            containsKeywords(message, ['jogadores', 'atletas', 'roster', 'elenco', 'time', 'equipe'])) {
            let response = "O roster atual da FURIA FC na Kings League Brasil é composto por:\n\n";
            furiaData.kingsLeague.jogadores.forEach(jogador => {
                response += `🇧🇷 ${jogador.nome} - ${jogador.funcao}\n${jogador.descricao}\n\n`;
            });
            response += "\nPresidentes da FURIA FC:\n";
            furiaData.kingsLeague.presidentes.forEach(presidente => {
                response += `• ${presidente.nome} - ${presidente.descricao}\n`;
            });
            return response;
        }
        
        // Verificar perguntas sobre conquistas de Rainbow Six
        if (containsKeywords(message, ['rainbow', 'r6', 'siege', 'six']) && 
            containsKeywords(message, ['títulos', 'vitórias', 'campeonatos', 'torneios', 'ganhou'])) {
            let response = "Principais conquistas da FURIA no Rainbow Six Siege:\n\n";
            furiaData.rainbowSix.conquistas.forEach(conquista => {
                response += `• ${conquista}\n`;
            });
            return response;
        }
        
        // Verificar perguntas específicas sobre jogadores e funções do CS:GO
        // Quem é o AWP/AWPer do time?
        if (containsKeywords(message, ['quem', 'qual']) && 
            containsKeywords(message, ['awp', 'awper', 'sniper']) && 
            containsKeywords(message, ['time', 'equipe', 'furia', 'cs', 'cs:go'])) {
            
            const awper = furiaData.csgo.jogadores.find(jogador => 
                jogador.funcao.toLowerCase().includes('awper'));
            
            if (awper) {
                return `O AWPer atual da FURIA é ${awper.nome}. ${awper.descricao}`;
            }
        }
        
        // Perguntas sobre funções específicas do CS:GO
        const funcoes = ['awper', 'rifler', 'entry fragger', 'support', 'lurker', 'in-game leader', 'igl'];
        for (const funcao of funcoes) {
            if (containsKeywords(message, ['quem', 'qual']) && 
                containsKeywords(message, [funcao, funcao.replace(' ', '')]) && 
                containsKeywords(message, ['time', 'equipe', 'furia', 'cs', 'cs:go'])) {
                
                const jogadoresDaFuncao = furiaData.csgo.jogadores.filter(jogador => 
                    jogador.funcao.toLowerCase().includes(funcao));
                
                if (jogadoresDaFuncao.length > 0) {
                    let response = `O ${funcao} da FURIA é `;
                    if (jogadoresDaFuncao.length === 1) {
                        response += `${jogadoresDaFuncao[0].nome}. ${jogadoresDaFuncao[0].descricao}`;
                    } else {
                        response = `Os jogadores que atuam como ${funcao} na FURIA são: `;
                        response += jogadoresDaFuncao.map(j => j.nome).join(', ') + '.';
                    }
                    return response;
                }
                
                // Se não encontrou jogador com essa função específica, explica a função
                if (furiaData.csgo.funcoes[funcao]) {
                    return furiaData.csgo.funcoes[funcao];
                }
            }
        }
        
        // Perguntas sobre jogadores específicos do CS:GO
        for (const jogador of furiaData.csgo.jogadores) {
            const nomeCompleto = jogador.nome.toLowerCase();
            const apelido = jogador.nome.split("'")[1]?.toLowerCase();
            
            if (containsKeywords(message, [apelido]) || message.includes(nomeCompleto)) {
                return `${jogador.nome} é um jogador ${jogador.nacionalidade === "Brasil" ? "brasileiro" : "internacional"} que atua como ${jogador.funcao} na FURIA. ${jogador.descricao}`;
            }
        }
        
        // Verificar palavras-chave na mensagem para perguntas gerais
        if (containsKeywords(message, ['história', 'fundação', 'fundada', 'criada', 'origem', 'começou'])) {
            return `${furiaData.historia.fundacao} ${furiaData.historia.crescimento} ${furiaData.historia.reconhecimento}`;
        }
        
        if (containsKeywords(message, ['jogadores', 'atletas', 'roster', 'elenco', 'time', 'equipe']) && 
            containsKeywords(message, ['cs', 'cs:go', 'counter', 'strike'])) {
            let response = "O roster atual da equipe de CS:GO da FURIA é composto por:\n\n";
            furiaData.csgo.jogadores.forEach(jogador => {
                response += `🇧🇷 ${jogador.nome} - ${jogador.funcao}\n${jogador.descricao}\n\n`;
            });
            return response;
        }
        
        if (containsKeywords(message, ['conquistas', 'títulos', 'vitórias', 'campeonatos', 'torneios', 'ganhou'])) {
            let response = "Principais conquistas da FURIA no CS:GO:\n\n";
            furiaData.csgo.conquistas.forEach(conquista => {
                response += `• ${conquista}\n`;
            });
            return response;
        }
        
        
        if (containsKeywords(message, ['modalidades', 'jogos', 'games', 'compete'])) {
            let response = "A FURIA compete nas seguintes modalidades:\n\n";
            furiaData.modalidades.forEach(modalidade => {
                response += `• ${modalidade}\n`;
            });
            return response;
        }
        
        if (containsKeywords(message, ['próximo', 'próximos', 'jogo', 'jogos', 'partida', 'partidas', 'quando'])) {
            return furiaData.csgo.proximosJogos;
        }
        
        if (containsKeywords(message, ['patrocinadores', 'parceiros', 'sponsors', 'marcas'])) {
            let response = "A FURIA conta com os seguintes patrocinadores:\n\n";
            furiaData.organizacao.patrocinadores.forEach(patrocinador => {
                response += `• ${patrocinador}\n`;
            });
            return response;
        }
        
        if (containsKeywords(message, ['curiosidades', 'fatos', 'interessante', 'sabia'])) {
            const randomIndex = Math.floor(Math.random() * furiaData.curiosidades.length);
            return `Curiosidade sobre a FURIA: ${furiaData.curiosidades[randomIndex]}`;
        }
        
        if (containsKeywords(message, ['lol', 'legends'])) {
            let response = `${furiaData.lol.historia}\n\nJogadores atuais de League of Legends:\n\n`;
            furiaData.lol.jogadores.forEach(jogador => {
                response += `🇧🇷 ${jogador.nome} - ${jogador.funcao}\n${jogador.descricao}\n\n`;
            });
            return response;
        }
        
        if (containsKeywords(message, ['valorant']) && !containsKeywords(message, ['jogadores', 'atletas', 'roster', 'elenco', 'time', 'equipe'])) {
            return furiaData.valorant.historia;
        }
        
        if (containsKeywords(message, ['kings', 'league']) && !containsKeywords(message, ['jogadores', 'atletas', 'roster', 'elenco', 'time', 'equipe'])) {
            return furiaData.kingsLeague.historia;
        }
        
        if (containsKeywords(message, ['rainbow', 'r6', 'siege', 'six']) && !containsKeywords(message, ['jogadores', 'atletas', 'roster', 'elenco', 'time', 'equipe'])) {
            return furiaData.rainbowSix.historia;
        }
        
        if (containsKeywords(message, ['organização', 'fundadores', 'donos', 'ceo'])) {
            let response = "A FURIA foi fundada por:\n\n";
            furiaData.organizacao.membros.forEach(membro => {
                response += `• ${membro}\n`;
            });
            return response;
        }
        
        // Resposta para perguntas sobre funções no CS:GO
        if (containsKeywords(message, ['o que', 'qual', 'como']) && 
            containsKeywords(message, ['função', 'papel', 'posição'])) {
            
            for (const [funcao, descricao] of Object.entries(furiaData.csgo.funcoes)) {
                if (message.includes(funcao)) {
                    return descricao;
                }
            }
        }
        
        // Resposta para saudações
        if (containsKeywords(message, ['oi', 'olá', 'ola', 'eae', 'e aí', 'bom dia', 'boa tarde', 'boa noite'])) {
            return "Olá! Sou o FURIA Bot, assistente virtual da FURIA Esports. Como posso ajudar você hoje? Você pode me perguntar sobre os jogadores de CS:GO, Valorant, Rainbow Six, Kings League, conquistas, história da organização ou qualquer outra informação sobre a FURIA!";
        }
        
        // Resposta para agradecimentos
        if (containsKeywords(message, ['obrigado', 'obrigada', 'valeu', 'thanks', 'thank you', 'vlw'])) {
            return "Por nada! Estou aqui para ajudar com qualquer informação sobre a FURIA. Tem mais alguma pergunta?";
        }
        
        // Resposta padrão se nenhuma palavra-chave for encontrada
        return `Desculpe, não consegui entender completamente sua pergunta: "${originalMessage}". 

Você pode perguntar sobre:
• Jogadores específicos de CS:GO (ex: "Quem é o FalleN?")
• Funções no time de CS:GO (ex: "Quem é o AWPer da FURIA?")
• Jogadores de outras modalidades (ex: "Quais são os jogadores de Valorant da FURIA?")
• Jogadores de Rainbow Six (ex: "Quem joga Rainbow Six na FURIA?")
• Jogadores da Kings League (ex: "Quem são os jogadores da FURIA na Kings League?")
• História da organização
• Conquistas e títulos
• Modalidades em que a FURIA compete
• Próximos jogos
• Patrocinadores

Tente reformular sua pergunta ou escolha uma das sugestões abaixo.`;
    }
    
    // Verificar se a mensagem contém palavras-chave
    function containsKeywords(message, keywords) {
        return keywords.some(keyword => message.includes(keyword));
    }
});
