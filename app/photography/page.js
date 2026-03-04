import PhotoGrid from '@/components/PhotoGrid';

export const metadata = {
  title: 'Photography | Zulfiker',
  description: 'Beyond code — capturing moments through the lens.',
};

// Add your photos here. Drop images into public/photos/ and add entries:
const photos = [
  // { src: '/photos/example.jpg', caption: 'Description' },
];

export default function PhotographyPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Photography</h1>
        <p>
          Beyond code — capturing moments through the lens.
        </p>
        <div className="accent-line"></div>
      </div>

      <p
        style={{
          color: 'var(--text-secondary)',
          marginBottom: '32px',
          fontSize: '0.92rem',
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
    </div>
  );
}
