import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Shahir',
  description: 'Thoughts on GPU programming, distributed systems, ML infrastructure, and systems engineering.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Blog</h1>
        <p>
          Deep dives into GPU programming, distributed systems, and the
          infrastructure that powers machine learning.
        </p>
        <div className="accent-line"></div>
      </div>

      {posts.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">✍️</div>
          <h3>No posts yet</h3>
          <p>Blog posts will appear here. Stay tuned!</p>
        </div>
      ) : (
        <div className="blog-grid">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="blog-card">
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
