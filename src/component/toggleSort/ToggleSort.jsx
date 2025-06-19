import "./toggleSort.css";
//管理 slider按鈕
function ToggleSort({ items, onChange }) {
  return (
    <div className="container" style={{ paddingBottom: "50px" }}>
      {/* 線條 */}
      <hr className="main-color" />
      <div className="flex-end">
        <p className="p-text main-color">Move done things to end?</p>
        <label className="switch">
          <input type="checkbox" checked={items} onChange={onChange} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default ToggleSort;
