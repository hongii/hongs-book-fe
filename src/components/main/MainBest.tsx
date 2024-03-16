import { Book } from "@/models/book.model";
import styled from "styled-components";
import BestBookItem from "../books/BestBookItem";

interface Props {
  books: Book[];
}
const MainBest = ({ books }: Props) => {
  return (
    <MainBestStyle>
      {books.map((book, i) => (
        <BestBookItem key={book.id} book={book} itemIdx={i} />
      ))}
    </MainBestStyle>
  );
};

const MainBestStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
`;

export default MainBest;