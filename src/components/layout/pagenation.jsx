"use client";

import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";

/**
 * Pagination component
 * @param {number} currentPage - 1-based current page
 * @param {function} onPageChange - (page: number) => void
 * @param {number} count - Total number of items (used with limit to compute pages)
 * @param {number} limit - Items per page (used with count to compute pages)
 * @param {number} [totalPages] - Optional: total pages (if not using count/limit)
 * @param {number} maxVisible - Max page numbers to show (default 5)
 */
export default function Pagination({
  currentPage = 1,
  onPageChange,
  count,
  limit,
  totalPages: totalPagesProp,
  maxVisible = 5,
}) {
  const totalPages =
    totalPagesProp ??
    (count != null && limit != null && limit > 0
      ? Math.max(1, Math.ceil(count / limit))
      : 1);

  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const half = Math.floor(maxVisible / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pages = getPageNumbers();
  const showFirst = pages[0] > 1;
  const showLast = pages[pages.length - 1] < totalPages;

  const buttonBase = "pagination-btn";

  return (
    <nav
      className="pagination"
      aria-label="Pagination"
    >
      <button
        type="button"
        className={`${buttonBase}`}
        onClick={() => onPageChange?.(1)}
        disabled={currentPage <= 1}
        aria-label="First page"
      >
        <FirstPageIcon fontSize="small" />
      </button>
      <button
        type="button"
        className={`${buttonBase}`}
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
      >
        <ChevronLeftIcon fontSize="small" />
      </button>

      {showFirst && (
        <>
          <button
            type="button"
            className={buttonBase}
            onClick={() => onPageChange?.(1)}
          >
            1
          </button>
          {pages[0] > 2 && <span className="pagination-ellipsis">…</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`${buttonBase} ${
            page === currentPage ? "pagination-btn-active" : ""
          }`}
          onClick={() => onPageChange?.(page)}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      {showLast && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && (
            <span className="pagination-ellipsis">…</span>
          )}
          <button
            type="button"
            className={buttonBase}
            onClick={() => onPageChange?.(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        type="button"
        className={buttonBase}
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
      >
        <ChevronRightIcon fontSize="small" />
      </button>
      <button
        type="button"
        className={buttonBase}
        onClick={() => onPageChange?.(totalPages)}
        disabled={currentPage >= totalPages}
        aria-label="Last page"
      >
        <LastPageIcon fontSize="small" />
      </button>
    </nav>
  );
}
