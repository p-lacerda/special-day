import './App.css'
import VideoBackground from './assets/kiki2.mp4'
import BackgroundMusic from './assets/frank.mp3'; 
import { useEffect, useRef } from 'react';

function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Volume inicial baixo (0.1)
      audioRef.current.play();
      fadeMusicIn();
    }
  }, []);

  const fadeMusicIn = () => {
    if (audioRef.current && audioRef.current.volume < 1) {
      audioRef.current.volume += 0.05; // Aumenta o volume gradualmente
      setTimeout(fadeMusicIn, 3000); // Chama a função novamente após 100ms
    }
  };



  return (
    <>
<div className="App">
      <div className="content">
        <div style={{ color: 'white', fontFamily: 'Caveat' }}>
          <h1 style={{ }}>Uma cartinha especial</h1>
        </div>
        <div style={{ background: 'white' }} className='paper'>
        <p style={{ fontFamily: 'Noto Sans, sans-serif', padding: '10px', fontWeight: '500'}}>
        Eu juro que nunca sei como essas mensagens começam, apenas gosto de esvaziar minha mente e pensar no que já passou, o que acaba sendo um pouco difícil pois muitas vezes me perco nos meus próprios pensamentos. 
        A minha mente é como se fosse um mar turbulento, passando por inúmeras tempestades e temporais chuvosos, onde eu me sinto sem rumo e com medo pois é tudo muito escuro. Só que aí você me aparece, e chega com seu sorriso radiante e seu jeito que deixaria qualquer um encantado, e torna tudo mais calmo quando fala que vai ficar tudo bem, me fazendo voltar a  como era ser criança, então esse dia eu dedico pra você minha princesa.
        Pra comemorar esse dia, me vieram várias ideias na cabeça, desde presentes que brilham, comidas que cê gosta, ou até mesmo fazer uma animação inspirada em você, mas sabe, eu resolvi escrever essa carta pra te provar o quanto você é especial. 
        <br />
        Já se passaram mais de meses que se parecem mais com anos, e alguns dias que passaram voando e eu queria que fossem eternos. Vejo seu mundo através de uma tela, e leio seus pensamentos em forma de mensagens, todo dia aprendendo algo novo sobre você, compartilhando alguns momentos e também te estressando em outros, mas esse é meu jeito de mostrar que está tudo bem e que eu estou ao seu lado, independente do que aconteça, pronto pra soltar alguma risada boba ou te dizer o quanto eu queria te abraçar pra poder curar suas dores.
        Você não tem ideia do quanto me dói quando você fala que o amor não foi algo tão presente na sua criação, pois disso que eu sou construído e não me imagino sem o carinho, sem a paixão que me faz seguir em frente, sem os abraços. Só queria que você pudesse entender o quanto sou apaixonado nas suas gargalhadas, no seu sorriso incrível, na mulher forte que você é, no quão você é dedicada e que dá o máximo de si, no quanto você me inspira. Quando ouço sua voz ou você me envia uma foto me faz sentir o cara mais sortudo do mundo, e eu posso te dizer que ser seu amigo vem mudando a minha vida e minha forma de enxergar o mundo também.
        <br />
        Provavelmente você não sabe o quanto eu fico emocionado quando você compartilha algum momento que você passou, quando eu parei pra refletir cheguei a descobrir que eu tive poucas dessas conversas na vida, e te ver desabafar comigo ou me contando algum segredo me faz perceber o quanto você confia em mim, e isso é tudo o que importa. Quando você me conta sobre algum problema ou até mesmo falando que não sabe quem é você mesma, eu não sei o que falar, mas eu quero saiba que eu estou aqui pra te escutar e falar que você consegue, pois você já passou por tantas coisas e talvez eu não saiba metade, mas eu sei que você consegue, eu também confio em você. 
        <br />
        Talvez eu não saiba quem é a Kawanny, bem, eu sei que seu Pokemon é o Cinccino, que você tem uma família que te ama, que você é muito engraçada e carinhosa, que você é linda e sabe se posicionar, já te contei que você é muito inteligente também? São tantas qualidades que eu ficaria a noite te falando todas até você dormir. Mas sabe uma delas que eu acho impressionante? Que o fato de você ser única muda tudo ao seu redor, você inspira, cuida e me dá alguns sermões que me lembram o quão especial você é, e o quanto você já viveu, e estando perto de ti eu me sinto um pequeno garoto. Mas quando a gente tá junto, rindo de besteira ou assistindo alguma obra, a gente volta pra infância, os problemas somem e quando tudo isso acaba eu quero que o dia comece novamente, e que você continue lá, me dizendo pra acordar cedo, me fazendo não esquecer de mim mesmo. Seu olhar tão puro quanto a infância e saber que eu ainda vou estar escutando sua voz é o que mais andou me motivando nos últimos tempos e eu não tenho nem como agradecer, é engraçado por que mesmo se eu comprasse o presente mais caro do mundo, não ia chegar nem perto do quão você me afeta.
        <br />
        Olha talvez eu receba algumas broncas por ter ficado acordado algumas madrugadas fazendo esse texto, foi uma experiência única na minha vida e eu queria tentar, nunca se sabe quando vamos ter a oportunidade de demonstrar como certas pessoas são importantes. O mundo tá cada vez mais estranho sabia? Eu sinto tudo cada vez mais distante, eu me sinto diferente a cada dia, mas saiba que nesse mar de pessoas, eu vou estar aqui pra ser sincero e um pouco ignorante só pra te ouvir falar e me fazer lembrar de quem eu sou. Feliz dias das crianças, e desculpa eu deixar de mandar 50 mil mensagens por dia pra poder escrever essas palavras, eu acho que eu só precisava escrever essa carta.
        </p>
        </div>
      </div>

      <div className="overlay"></div> {/* Superposição semitransparente */}
      <audio ref={audioRef} src={BackgroundMusic} /> {/* Áudio de fundo */}
      <div className="video-background">
        <video autoPlay muted loop className="video">
          <source src={VideoBackground} type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>
      </div>
    </div>
    </>
  )
}

export default App
