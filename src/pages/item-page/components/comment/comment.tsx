type ItemCommentProps = {
  comment: {
    by: string;
    id: number;
    kids?: number[];
    parent: number;
    text: string;
    time: number;
    type: string;
  };
};

export const ItemComment: React.FC<ItemCommentProps> = ({ comment }) => {
  const date = new Date(comment.time).toDateString();
  return (
    <div>
      <div>{comment.text}</div>
      <div>
        <span>{comment.by}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};
