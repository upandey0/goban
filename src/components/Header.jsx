import { useState, useEffect, useRef } from 'react';
import axiosInstance from '../apis/base.api';
import { useRecoilState } from 'recoil';
import { responseState } from '../recoil/atoms';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState(localStorage.getItem('loc') || ('todos'));
  const [searchTerm, setSearchTerm] = useState('');
  const [response, setResponse] = useRecoilState(responseState);
  const inputRef = useRef(null);

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
    localStorage.setItem('loc',e.target.value)
    navigate(`/${e.target.value}`);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      console.log('Enter Key Down');
      // Add your fetch logic here if needed
    }
  };

  const fetchData = async (endpoint) => {
    setResponse({ data: null, loading: true, error: null });
    try {
      const response = await axiosInstance.get(`/${endpoint}`);
      const data = response.data;
      setResponse({ data, loading: false, error: null });
    } catch (error) {
      setResponse({ data: null, loading: false, error: error.message });
    }
  };

  useEffect(() => {
    fetchData(searchType);
  }, [searchType]);

  return (
    <div className="flex w-screen justify-between bg-black text-white h-[10vh] items-center px-4">
      <div className="flex">
        <h1 className="text-lg">JSON Placeholder</h1>
      </div>
      <div className="flex">
        <div className="flex">
          <select
            className="px-2 py-1 bg-gradient-to-r from-pink-500 to-blue-300 text-white rounded-l-md focus:outline-none"
            value={searchType}
            onChange={handleSearchTypeChange}
          >
            <option value="posts" className='text-rose-500'>Posts</option>
            <option value="todos" className='text-rose-500'>Todos</option>
            <option value="users" className='text-rose-500'>Users</option>
            <option value="comments" className='text-rose-500'>Comments</option>
          </select>
          <input
            type="text"
            className="px-2 py-1 bg-gradient-to-r from-pink-500 to-blue-300 rounded-r-md focus:outline-none"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchTermChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            disabled={searchType === 'todos'}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
