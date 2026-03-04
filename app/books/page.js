import { books } from '@/data/books';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Books | Shahir',
  description: 'Book reviews, reading lists, and recommendations.',
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

export default function BooksPage() {
  // Group books by year
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
        <h1>Books</h1>
        <p>
          What I&apos;ve been reading — with short reviews and ratings. Mostly systems,
          distributed computing, and the occasional mind-bender.
        </p>
        <div className="accent-line"></div>
      </div>

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
    </div>
  );
}
