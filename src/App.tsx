import React from 'react';
import './App.css';
import ImageCard from './Components/ImageCard';

const App: React.FC = () => {
  const images = [
    {
      id: '1',
      src: '/Camaro.png', // Caminho para a imagem na pasta public
      description: `<h3>CAMARO AMARELO</h3>
      MOTOR V6 3.6L
      POTÊNCIA 335 CV
      TORQUE 39.3 Kgfm
      ACELERAÇÃO DE 0 a 100 em 5,2s`,
    },
    {
      id: '2',
      src: '/Camaropreto.png',
      description: `<h3>CAMARO PRETO</h3>
      MOTOR V8 6.2L Supercharged
POTÊNCIA 650 CV
TORQUE 89.9 Kgfm
ACELERAÇÃO DE 0 a 100 em 3,5s`,
    },
    {
      id: '3',
      src: '/Camarovermelho.png',
      description: `<h3>CAMARO VERMELHO</h3>
      MOTOR I4 2.0L Turbo
POTÊNCIA 275 CV
TORQUE 40.8 Kgfm
ACELERAÇÃO DE 0 a 100 em 5,4s`,
    },
    {
      id: '4',
      src: '/Ferrariazul.png',
      description: `<h3>FERRARI AZUL</h3>
      MOTOR V12 6.5L
POTÊNCIA 800 CV
TORQUE 73.2 Kgfm
ACELERAÇÃO DE 0 a 100 em 2,8s`,
    },
    {
      id: '5',
      src: '/Ferrarivermelha.png',
      description: `<h3>FERRARI VERMELHA</h3>
      MOTOR V8 3.9L Biturbo
POTÊNCIA 720 CV
TORQUE 78.5 Kgfm
ACELERAÇÃO DE 0 a 100 em 2,9s`,
    },
    {
      id: '6',
      src: '/Lamborghiniazul.png',
      description: `<h3>LAMBORGHINI AZUL</h3>
      MOTOR V10 5.2L
POTÊNCIA 640 CV
TORQUE 60.0 Kgfm
ACELERAÇÃO DE 0 a 100 em 3,1s`,
    },
    {
      id: '7',
      src: '/Lamborghinipreta.png',
      description: `<h3>LAMBORGHINI PRETA</h3>
      MOTOR V12 6.5L
POTÊNCIA 770 CV
TORQUE 73.4 Kgfm
ACELERAÇÃO DE 0 a 100 em 2,8s`,
    },
    {
      id: '8',
      src: '/Porschelaranja.png',
      description: `<h3>PORSCHE LARANJA</h3>
      MOTOR Flat-6 3.0L Turbo
POTÊNCIA 450 CV
TORQUE 54.0 Kgfm
ACELERAÇÃO DE 0 a 100 em 3,5s`,
    },
    {
      id: '9',
      src: '/Porscheprata.png',
      description: `<h3>PORSCHE PRATA</h3>
      MOTOR Flat-6 4.0L
POTÊNCIA 510 CV
TORQUE 47.9 Kgfm
ACELERAÇÃO DE 0 a 100 em 3,4s`,
    }, 
    {
      id: '10',
      src: '/RangeRoverlaranja.png',
      description: `<h3>RANGE ROVER LARANJA</h3>
      MOTOR V8 5.0L Supercharged
POTÊNCIA 525 CV
TORQUE 63.7 Kgfm
ACELERAÇÃO DE 0 a 100 em 5,4s`,
    }, 
    {
      id: '11',
      src: '/RangeRoverbranca.png',
      description: `<h3>RANGE ROVER BRANCA</h3>
      MOTOR I6 3.0L Turbo MHEV
POTÊNCIA 400 CV
TORQUE 56.1 Kgfm
ACELERAÇÃO DE 0 a 100 em 5,9s`,
    }, 
    {
      id: '11',
      src: '/Paganihuayra.png',
      description: `<h3>PAGANI HUYARA VERMELHA</h3>
      MOTOR V12 6.0L Biturbo
POTÊNCIA 730 CV
TORQUE 102.0 Kgfm
ACELERAÇÃO DE 0 a 100 em 3,2s`,
    }, 
  ];

  return (
    <div className="App">
      <h1>GARAGEM</h1>
      <h2>EXPLORE AS OPÇÕES DE CARROS EM SUA GARAGEM. CLIQUE EM CADA UM PARA VER SUA DESCRIÇÃO</h2>
      <div className="grid-container">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            id={image.id}
            src={image.src}
            description={image.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

