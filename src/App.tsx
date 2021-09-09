import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import Comments from './components/Comments';
import Replies from './components/Replies';


function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <Post />

        {/* comments section */}
        <div className="">

          {/* normal comment */}
          <Comments />

          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          <Replies/>

        </div>

      </div>
    </div>
  );
}

export default App;