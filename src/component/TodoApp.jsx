import { useState, useRef, useEffect } from "react";
import ProgressBar from "./progressBar/ProgressBar";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import ToggleSort from "./toggleSort/ToggleSort";

function TodoApp() {
  //陣列
  const [items, setItems] = useState([]);
  //取得輸入框值
  const [input, setInput] = useState("");
  // 是否把已完成的項目排在後面（true = 已完成排後面）
  const [sortCompletedLast, setSortCompletedLast] = useState(false);
  // 取得清單區塊的 DOM 元素，用來做自動滾動到底的效果
  const listRef = useRef(null);

  const addItem = () => {
    //判斷輸入框是否為空 就不繼續
    if (!input.trim()) return;
    const newItem = {
      id: Date.now(), //現在取得現時間當id
      text: input.trim(), //輸入框值
      completed: false, //判斷已完成狀態
    };
    //陣列儲存
    setItems([...items, newItem]);
    //輸入框清空
    setInput("");
  };

  //更新items陣列 對指定id 切換 completed狀態
  const toggleComplete = (id) => {
    setItems(
      (prev) =>
        prev.map((item) =>
          // 將 scrollTop 設定為最大 scrollHeight（即捲到底）
          item.id === id ? { ...item, completed: !item.completed } : item
        ) // items 有變化時才觸發
    );
  };

  // 刪除指定 id 的項目
  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  //增加items更改，自動將列表捲動到底部
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [items]);

  // 總項目數
  const total = items.length;
  // 已完成的項目數
  const completed = items.filter((item) => item.completed).length;
  // 完成百分比
  const percent = total ? Math.round((completed / total) * 100) : 0;

  const sortedItems = [...items].sort((a, b) => {
    // 若未啟用排序，只按照建立時間排序
    if (!sortCompletedLast) return a.createdAt - b.createdAt;
    // 如果兩者的完成狀態相同，依建立時間排序
    if (a.completed === b.completed) return a.createdAt - b.createdAt;
    // 否則，把未完成的排前面，已完成的排後面
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="container" style={{ paddingTop: 120 }}>
        {/* 標題 */}
        <h1 className="h1-text main-color">Todo List</h1>
        {/* 副標題 */}
        <p className="p-text sub-color" style={{ fontSize: "small" }}>
          Add things to do
        </p>
        <hr className="main-color" />
      </div>
      {/* 進度條 */}
      <ProgressBar percent={percent} />
      {/* 列表 */}
      <TodoList
        items={sortedItems}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
        listRef={listRef}
      />
      {/* 切換鈕 */}
      <ToggleSort
        items={sortCompletedLast}
        onChange={() => setSortCompletedLast(!sortCompletedLast)}
      />
      {/* 輸入框 */}
      <TodoInput input={input} onChange={setInput} onAdd={addItem} />
    </>
  );
}

export default TodoApp;
