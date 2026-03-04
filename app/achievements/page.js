import { achievements } from '@/data/achievements';

export const metadata = {
  title: 'Achievements | Shahir',
  description: 'Milestones, accomplishments, and things I\'m proud of.',
};

export default function AchievementsPage() {
  const categories = [...new Set(achievements.map((a) => a.category))];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Achievements</h1>
        <p>Milestones and accomplishments along the way.</p>
        <div className="accent-line"></div>
      </div>

      {achievements.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🏆</div>
          <h3>Coming Soon</h3>
          <p>Achievements will be listed here.</p>
        </div>
      ) : (
        <div className="achievements-timeline">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="achievement-item">
              <span className="achievement-date">{achievement.date}</span>
              <span className="achievement-category">{achievement.category}</span>
              <h3>
                {achievement.link ? (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {achievement.title}
                  </a>
                ) : (
                  achievement.title
                )}
              </h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
