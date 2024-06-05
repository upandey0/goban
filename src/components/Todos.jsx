import { useRecoilValue } from "recoil";
import { responseState } from "../recoil/atoms";

const Todos = () => {
  const { data, loading, error } = useRecoilValue(responseState);

  if (loading) {
    return <div className="flex items-center justify-center"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="flex items-center justify-center"><p>{error}</p></div>;
  }

  if (!data || !Array.isArray(data)) {
    return <div className="flex items-center justify-center"><p>No data available</p></div>;
  }

  return (
    <div className="flex flex-col">
      {data.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between bg-gray-200 p-4 mb-2 rounded"
        >
          <div>
            <p className="font-bold">{todo.title}</p>
            <p>User ID: {todo.userId}</p>
          </div>
          <div>
            <span
              className={`px-2 py-1 rounded ${
                todo.completed ? "bg-green-500 text-white" : "bg-red-500 text-white"
              }`}
            >
              {todo.completed ? "Completed" : "Incomplete"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
