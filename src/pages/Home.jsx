import TodoInput from "../components/TodoInput";
import List from "./../components/List";

const Home = ({ todos, onEdit, onCreate, onDelete, onUpdate }) => {
  return (
    <div className="area">
      <TodoInput onCreate={onCreate} />
      <List todos={todos} onDelete={onDelete} onEdit={onEdit} onUpdate={onUpdate} />
    </div>
  );
};

export default Home;
