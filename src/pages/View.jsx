import TodoView from "./../components/TodoView";

const View = ({ todos, onEdit }) => {
  return (
    <div className="area">
      <TodoView todos={todos} onEdit={onEdit} />
    </div>
  );
};

export default View;
