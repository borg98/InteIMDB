import "../styles/components/PagingNav.scss";

interface PagingNavProps {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export function PagingNav({
  currentPage,
  totalPages,
  setPage,
}: PagingNavProps) {
  return (
    <>
      <div className="paging-container">
        {currentPage != 1 && (
          <button
            className="paging-container__button"
            onClick={() => {
              setPage(currentPage - 1);
            }}
          >
            Previous
          </button>
        )}
        <ul className="paging-container__list">
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i} className={`paging-container__list__item $`}>
              <button
                className={`paging-container__button ${
                  currentPage === i + 1 ? "active" : ""
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
        {currentPage != totalPages && (
          <button
            className="paging-container__button"
            onClick={() => {
              setPage(currentPage + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}
