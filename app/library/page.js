import { books } from '@/data/books';
import { FaExternalLinkAlt } from 'react-icons/fa';
import MusicSection from '@/components/MusicSection';

export const metadata = {
  title: 'Library | Zulfiker',
  description: 'Books, music, and the things that feed the mind outside of code.',
};

function StarRating({ rating }) {
  return (
    <div className="book-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`star ${star > rating ? 'empty' : ''}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function LibraryPage() {
  const booksByYear = books.reduce((acc, book) => {
    const year = book.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(book);
    return acc;
  }, {});

  const sortedYears = Object.keys(booksByYear).sort((a, b) => b - a);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Library</h1>
        <p>
          Books, music, and the things that feed the mind outside of code.
        </p>
        <div className="accent-line"></div>
      </div>

      {/* Books Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '24px' }}>📚 Reading</h2>

        {sortedYears.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📚</div>
            <h3>No books yet</h3>
            <p>Reading list will appear here.</p>
          </div>
        ) : (
          sortedYears.map((year) => (
            <div key={year} className="books-year-section">
              <h2>{year}</h2>
              <div className="books-grid">
                {booksByYear[year].map((book, idx) => (
                  <div key={idx} className="book-card">
                    <div className="book-cover">
                      <div className="book-cover-placeholder">📖</div>
                    </div>
                    <div className="book-info">
                      <h3>{book.title}</h3>
                      <p className="book-author">{book.author}</p>
                      <StarRating rating={book.rating} />
                      <p className="book-review">{book.review}</p>
                      {book.goodreadsUrl && (
                        <a
                          href={book.goodreadsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="book-link"
                        >
                          Goodreads <FaExternalLinkAlt size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>

      {/* Music Section */}
      <MusicSection />
    </div>
  );
}
