import PhotoGrid from '@/components/PhotoGrid';
import MusicSection from '@/components/MusicSection';

export const metadata = {
  title: 'Photography & Music | Shahir',
  description: 'Beyond code — photography, visual art, and the music that fuels the work.',
};

// Add your photos here. Drop images into public/photos/ and add entries:
const photos = [
  // { src: '/photos/example.jpg', caption: 'Description' },
];

export default function PhotographyPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Photography &amp; Music</h1>
        <p>
          Beyond code — capturing moments and the sounds that fuel the work.
        </p>
        <div className="accent-line"></div>
      </div>

      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '24px' }}>
          📸 Photography
        </h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            marginBottom: '32px',
            fontSize: '0.95rem',
          }}
        >
          I shoot with whatever I have — phone, borrowed camera, doesn&apos;t matter.
          It&apos;s about the moment, not the gear. Find me on{' '}
          <a
            href="https://unsplash.com/@"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent)' }}
          >
            Unsplash
          </a>
          .
        </p>
        <PhotoGrid photos={photos} />
      </section>

      <MusicSection />
    </div>
  );
}
