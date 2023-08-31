import { useState, useEffect } from "react";

import BookCard from "../bookCard/BookCard";

const temp_Book = [
  {
    title: "Śmierć w darkroomie",
    authors: ["Edward Pasewicz"],
    publisher: "Nakł. wydawn. EMG",
    publishedDate: "2007",
    industryIdentifiers: [
      {
        type: "ISBN_10",
        identifier: "8392298071",
      },
      {
        type: "ISBN_13",
        identifier: "9788392298076",
      },
    ],
    readingModes: {
      text: false,
      image: false,
    },
    pageCount: 223,
    printedPageCount: 228,
    dimensions: {
      height: "21.00 cm",
    },
    printType: "BOOK",
    maturityRating: "NOT_MATURE",
    allowAnonLogging: false,
    contentVersion: "1.3.3.0.preview.0",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=N4YYAQAAIAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE736ZPHO7ihwuna4VYyDVrzmiQ2vk2xtZYsjHWFrvLNzP_YrumET8YnjJ4B_e_z5pk85r702fzKZBNFv0XoShwKZSNJaywd-TQJd3kU2XUZfteq9i10O5-he1KzTn1tSyLDf2tz_&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=N4YYAQAAIAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72KVM0pfEfUnkpFKZJtl4TlHA08W_oblpoW0C2YX-kHsbp1fH4hGNZMPAF3AcoYjYdO1G1Yp9nmJiGsnjpOGDNQ8hyqOCTsiHpBXKVhDRjTCd7ax5pMbp6BiHM-0EiPrLUVLO1w&source=gbs_api",
      small:
        "http://books.google.com/books/content?id=N4YYAQAAIAAJ&printsec=frontcover&img=1&zoom=2&imgtk=AFLRE70Zm64ZvZpi_5Umun0Ui6i3N7wT6OK-94mtK2LZW7rFL6KaC3Bo2RUA6mBqEosjHfjYgRdpK5PPTs_TBppW7KvhJEVFNytbjq0VmG4WnA6AIkSEajoaCe3SwwNIwayvkGg81CAy&source=gbs_api",
      medium:
        "http://books.google.com/books/content?id=N4YYAQAAIAAJ&printsec=frontcover&img=1&zoom=3&imgtk=AFLRE711L_zoa3k-otZQDdLPx33uWHi1jrit7VERKoIefN6ICGGxSYe_31bOPmWLGcuoIf5w8XuB8k-4AwMofmX2X6Wsvgby0Cgjb78xW7tT78QcEH-laAb11yZUPhLwe3HtZmXJwmgj&source=gbs_api",
      large:
        "http://books.google.com/books/content?id=N4YYAQAAIAAJ&printsec=frontcover&img=1&zoom=4&imgtk=AFLRE739himZgLyjUD_TEP0sdimqF_RXLH-faPufI4tuLxqeU02-kFR5TXjSXR30ygc2I0xtTroyDZ1NHL4zBY5xFmzgyUq5Z7S7NhC8zl777ws0jHnb6dbDgD08OaaG8XKaJdDuqLQs&source=gbs_api",
      extraLarge:
        "http://books.google.com/books/content?id=N4YYAQAAIAAJ&printsec=frontcover&img=1&zoom=6&imgtk=AFLRE70ufCz7rLAHjDiW0naBXqFHFVKwV9HgIka182GJtL64svx5w5y-HJTOverJVl0yD7w4FALmGwrtAkmkNUTPSbCYB05U9QywqXE6hGiJxxu7x-6mSbWdf9oxQAoFpjw2QAXXorcH&source=gbs_api",
    },
    language: "pl",
    previewLink:
      "http://books.google.pl/books?id=N4YYAQAAIAAJ&hl=&source=gbs_api",
    infoLink:
      "https://play.google.com/store/books/details?id=N4YYAQAAIAAJ&source=gbs_api",
    canonicalVolumeLink:
      "https://play.google.com/store/books/details?id=N4YYAQAAIAAJ",
  },
];

const API_URL =
  "https://www.googleapis.com/books/v1/volumes?q=edward+pasewicz&callback=handleResponse";

const temp_API_URL = "https://www.googleapis.com/books/v1/volumes/N4YYAQAAIAAJ";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();

      setBooks(data);
      console.log(data);
    }
    getBooks();
  }, []);

  return (
    <>
      <div>Book List</div>
      <h2>{books.length}</h2>
      {books?.length > 0 ? (
        <div className="bookContainer">
          {books.map((book) => (
            <BookCard book={book} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>
            Opps! It looks like an error has occured. Please try refreshing the
            page.
          </h2>
        </div>
      )}
      <h2>Tytuł: {temp_Book[0].title}</h2>
    </>
  );
};

export default BookList;
