import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import SkillBar from '@/components/SkillBar';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />

      {/* Projects Section */}
      <section className="section">
        <div className="section-header">
          <h2>Projects</h2>
          <p>What I&apos;m currently building</p>
          <div className="accent-line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="section-header">
          <h2>Skills &amp; Tools</h2>
          <p>Technologies I work with daily</p>
          <div className="accent-line"></div>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-category">
              <h3>{category.name}</h3>
              {category.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  status={skill.status}
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      {posts.length > 0 && (
        <section className="section">
          <div className="section-header">
            <h2>Latest Posts</h2>
            <p>Thoughts on systems, GPUs, and engineering</p>
            <div className="accent-line"></div>
          </div>
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
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/blog" className="btn-secondary">
              View All Posts →
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
