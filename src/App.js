import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
const dummyList = [
  {
    id: 1,
    author: "이도윤1",
    content: "하이1",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "이도윤2",
    content: "하이2",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "이도윤3",
    content: "하이3",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "이도윤4",
    content: "하이4",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "이도윤5",
    content: "하이5",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];
function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
