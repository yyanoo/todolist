import "./listItem.css";
// 列表元件 TodoList
// props 接收：
// - items：待辦事項的陣列
// - toggleComplete：切換項目是否完成的函式（點 checkbox）
// - deleteItem：刪除指定項目的函式（點刪除按鈕）

function ListItem({ item, toggleComplete, deleteItem }) {
  return (
    <div className="box d-flex align-items-center justify-content-between shadow-sm">
      <div>
        {/* 點擊後顯示完成 */}
        <input
          className="check-box form-check-input"
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleComplete(item.id)}
          id={`todo-${item.id}`}
        />
        {/* 列出items文字 */}
        <label
          htmlFor={`todo-${item.id}`}
          className="mb-0 fs-6 main-color label-box"
          style={{ textDecoration: item.completed ? "line-through" : "none" }}
        >
          {item.text}{/* 顯示待辦事項內容 */}
        </label>
      </div>
      {/* 刪除按鈕 */}
      <button
        onClick={() => deleteItem(item.id)}
        className="list-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#4b4ba080"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
      </button>
    </div>
  );
}

export default ListItem;
