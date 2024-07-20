import React, { useEffect, useState } from 'react';

function Github() {
  const [username, setUsername] = useState("hiteshchoudhary");
  const [data, setData] = useState({});
  const [searchUsername, setSearchUsername] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [username]);

  const handleSearch = () => {
    setUsername(searchUsername);
  };

  return (
    <>
      <div className="flex px-3 py-3 flex-row flex-wrap flex-basis-1/2 flex-shrink">

        <div className="max-w-m rounded overflow-hidden shadow-lg flex-1">
          <img className="rounded-full" src={data.avatar_url} alt="Avatar" loading="lazy" />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              <h1>{data.name}</h1>
            </div>
            <p className="text-gray-700 text-base">
              {data.bio}
            </p>
          </div>

          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Followers: {data.followers}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Location: {data.location}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              Twitter: {data.twitter_username}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              Public Repos: {data.public_repos}
            </span>
          </div>
        </div>

        {/* Sidebar with search functionality */}
        <div className="flex justify-center max-w-sm">
          <div className="relative cursor-pointer dark:text-white">
            <div className="relative p-6 m-3 bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
              <div className="flex items-center">
                <span className="text-xl">😎</span>
                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 dark:text-white">Cool Feature</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Enter a GitHub username to fetch their stats.
              </p>

              <input
                type="text"
                placeholder="Enter GitHub username"
                value={searchUsername}
                onChange={(e) => setSearchUsername(e.target.value)}
                className="p-2 my-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={handleSearch}
                className="p-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
                Search
              </button>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Github;
