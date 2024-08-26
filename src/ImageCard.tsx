import React, { useState } from 'react';

interface ImageCardProps {
  imageUrl: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(prevState => !prevState);
  };

  return (
    <div style={{ position: 'relative', width: '200px', height: '200px', margin: '10px' }}>
      <img
        src={imageUrl}
        alt="thumbnail"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          cursor: 'pointer',
          display: flipped ? 'none' : 'block',
        }}
        onClick={handleClick}
      />
      {flipped && (
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            cursor: 'pointer',
            padding: '10px', // Adiciona um pouco de padding para o texto
          }}
          onClick={handleClick}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default ImageCard;