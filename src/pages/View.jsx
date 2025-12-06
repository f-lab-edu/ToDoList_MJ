import TodoDetail from "../components/TodoDetail";

const Detail = ({ todos, onEdit }) => {
  return (
    <div className="area">
      <TodoDetail todos={todos} onEdit={onEdit} />
    </div>
  );
};

export default Detail;
