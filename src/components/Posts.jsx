import { useRecoilValue } from "recoil";
import { responseState } from "../recoil/atoms";

const Posts = () => {
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
      {data.map((post) => (
        <div
          key={post.id}
          className="flex flex-col bg-gray-200 p-4 mb-2 rounded shadow-md"
        >
          <h2 className="font-bold text-lg mb-2">{post.title}</h2>
          <p className="mb-4">{post.body}</p>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">User ID: {post.userId}</span>
            <span className="text-sm text-gray-600">Post ID: {post.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
