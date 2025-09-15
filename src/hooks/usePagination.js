import { useState, useMemo, useCallback } from 'react';
import { getPageCount } from '../utils/pages';

const usePagination = ({ totalCount = 0, limit = 10 }) => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(totalCount);

  const totalPages = useMemo(() => {
    return getPageCount(count, limit);
  }, [count, limit]);

  const nextPage = () => {
    setPage(prev => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setPage(prev => Math.max(prev - 1, 1));
  };

  const setTotalCount = useCallback(
    newCount => {
      setCount(newCount);
      if (page > getPageCount(newCount, limit)) {
        setPage(getPageCount(newCount, limit));
      }
    },
    [page, limit]
  );

  return { page, totalPages, setPage, nextPage, prevPage, setTotalCount };
};

export default usePagination;
