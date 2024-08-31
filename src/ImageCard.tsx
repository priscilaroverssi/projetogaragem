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
    <div className="image-card">
      <img
        src={imageUrl}
        alt={description} // Usar a descrição como alt
        className={`image ${flipped ? 'hidden' : ''}`}
        onClick={handleClick}
      />
      {flipped && (
        <div
          className="description"
          onClick={handleClick}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default ImageCard;
