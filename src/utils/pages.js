export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const pagesArray = totalPages => {
  let result = [];
  for (let i = 1; i <= totalPages; i++) {
    result.push(i);
  }
  return result;
};
