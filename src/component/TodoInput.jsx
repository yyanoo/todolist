// 輸入框元件
// props 接收：
// - items：目前輸入框的值（注意命名建議改為 input）
// - onChange：當使用者輸入時，更新父元件狀態
// - onAdd：按下新增（+）或 Enter 鍵時呼叫，將輸入內容加入待辦清單

function TodoInput({ input, onChange, onAdd }) {
  return (
    <div className="container">
      <p className="p-text main-color" style={{ paddingBottom: "5px" }}>
        Add to list
      </p>

      <div className="row align-items-center">
        <div className="col-10" style={{ paddingRight: 2 }}>
          <input
            type="text"
            className="form-control"
            placeholder="請輸入待辦事項"
            maxLength={30} // 限制最多輸入 30 字，避免排版變形
            value={input} // 將 props 傳進來的值綁定到 input（受控元件）
            onChange={(e) => onChange(e.target.value)} // 輸入時更新父層的輸入值
            onKeyDown={(e) => e.key === "Enter" && onAdd()} // 按下 Enter 時觸發 onAdd
          />
        </div>

        {/* input 按鈕 */}
        <div className="col-2" style={{ paddingLeft: 2 }}>
          <button
            className="btn w-100"
            id="custom-progress-bar"
            onClick={onAdd} // 點擊按鈕時，呼叫 onAdd 將輸入內容加入清單
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
