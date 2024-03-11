import { BookReviewItem as IBookReviewItem } from "@/models/book.model";
import { formatDate } from "@/utils/format";
import styled from "styled-components";
import { FaStar } from "@react-icons/all-files/fa/FaStar";

interface Props {
  review: IBookReviewItem;
}

const Star = ({ score }: Pick<IBookReviewItem, "score">) => {
  return (
    <span className="star">
      {Array.from({ length: score }, (_, i) => (
        <span key={i}>
          <FaStar />
        </span>
      ))}
    </span>
  );
};

const BookReviewItem = ({ review }: Props) => {
  return (
    <BookReviewItemStyle>
      <header className="header">
        <div className="name-score-container">
          <span className="name">{review.userName}</span>
          <Star score={review.score} />
        </div>
        <div className="date-container">
          <span className="date">{formatDate(review.createdAt)}</span>
        </div>
      </header>
      <div className="content">
        <p>{review.review}</p>
      </div>
    </BookReviewItemStyle>
  );
};

const BookReviewItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.borderShadow.itemShadow};
  border-radius: ${({ theme }) => theme.borderRadius.default};

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;
    padding: 0;

    .name-score-container {
      display: flex;
      gap: 1rem;
    }

    .star {
      svg {
        fill: #ff7b00;
      }
    }
  }

  .content {
    padding: 0;
    p {
      margin: 0;
    }
  }
`;

export default BookReviewItem;