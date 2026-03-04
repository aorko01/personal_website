'use client';

import { useState } from 'react';

export default function PhotoGrid({ photos }) {
  const [lightbox, setLightbox] = useState(null);

  if (!photos || photos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📷</div>
        <h3>Coming Soon</h3>
        <p>Photos will be uploaded here. Check back soon!</p>
      </div>
    );
  }

  return (
    <>
      <div className="photo-grid">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="photo-item"
            onClick={() => setLightbox(photo)}
          >
            <img src={photo.src} alt={photo.caption || 'Photo'} loading="lazy" />
            {photo.caption && (
              <div className="photo-overlay">
                <p>{photo.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>
            ×
          </button>
          <img src={lightbox.src} alt={lightbox.caption || 'Photo'} />
        </div>
      )}
    </>
  );
}
