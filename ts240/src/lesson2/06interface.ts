{
  // code provided
  const book = {
    title: "The Great Gatsby",
    author: {
      firstName: "F. Scott",
      lastName: "Fitzgerald",
    },
    publicationDate: 1925,
    genres: ["Tragedy", "Realism"],
  };

  // write a corresponding interface:
  interface Book {
    title: string;
    author: {
      firstName: string;
      lastName: string;
    };
    publicationDate: number;
    genres: string[];
  }
}