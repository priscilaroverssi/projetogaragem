import React, { useState } from 'react';
import './ImageCard.css'; 

interface ImageCardProps {
  id: string;
  src: string; 
  description: string; 
}

const ImageCard: React.FC<ImageCardProps> = ({ id, src, description }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="image-card">
      <img src={src} alt={`Image ${id}`} onClick={handleClick} />

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleClose}>&times;</span>
            <div className="description" dangerouslySetInnerHTML={{ __html: description }} />
            <button className="ok-button" onClick={handleClose}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;

