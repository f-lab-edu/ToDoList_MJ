import Editor from "./../components/Editor";
import List from "./../components/List";

const Home = ({ todos, onEdit, onCreate, onDelete, onUpdate }) => {
  console.log(todos);
  return (
    <div className="area">
      <Editor onCreate={onCreate} />
      <List todos={todos} onDelete={onDelete} onEdit={onEdit} onUpdate={onUpdate} />
    </div>
  );
};

export default Home;
