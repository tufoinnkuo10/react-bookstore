const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mUHyte4brfJIwtKjQbso/books';

export const fetchBookFrmApi = async () => {
  const response = await fetch(baseUrl, {
    method: 'GET',
  });
  const result = await response.json();
  return result;
};

export const addBookToApi = async (book) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      category: book.category,
    }),
  });
  (await response.text());
};


