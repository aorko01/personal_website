export default function MusicSection() {
  const genres = [
    '🎵 Lo-fi',
    '🎸 Post-Rock',
    '🎹 Ambient',
    '🎧 Electronic',
    '🎻 Classical',
    '🎤 Hip-Hop',
    '🎷 Jazz',
  ];

  return (
    <div className="music-section">
      <h2>🎶 Music</h2>
      <p>
        Music is how I decompress after debugging memory leaks at 2 AM.
        Here are the genres that keep me going.
      </p>

      <div className="music-genres">
        {genres.map((genre) => (
          <span key={genre} className="genre-tag">
            {genre}
          </span>
        ))}
      </div>

      <p className="music-note">
        Always open to recommendations — especially anything with complex layering
        or interesting production.
      </p>
    </div>
  );
}
