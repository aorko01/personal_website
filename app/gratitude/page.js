import { gratitudeEntries } from '@/data/gratitude';

export const metadata = {
  title: 'Gratitude | Zulfiker',
  description: 'One small good thing about every day.',
};

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function GratitudePage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Gratitude</h1>
        <p>
          One small good thing about every day. A reminder that progress
          isn&apos;t always measured in commits.
        </p>
        <div className="accent-line"></div>
      </div>

      {gratitudeEntries.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">✨</div>
          <h3>Nothing yet</h3>
          <p>Daily entries will appear here.</p>
        </div>
      ) : (
        <div className="gratitude-grid">
          {gratitudeEntries.map((entry, idx) => (
            <div key={idx} className="gratitude-card">
              <div className="gratitude-date">
                <span className="dot"></span>
                {formatDate(entry.date)}
              </div>
              <p>{entry.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
