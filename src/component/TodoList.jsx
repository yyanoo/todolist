// 陣列列出列表
// 此元件負責將待辦清單 items 逐一渲染成 ListItem

import ListItem from "./listItem/ListItem";
//列表
function TodoList({ items, toggleComplete, deleteItem, listRef }) {
  return (
    <div
      className="container"
      ref={listRef}
      style={{ maxHeight: "400px", overflowY: "auto" }}
    >
      <div className="list-box">
        
        {items.map((item) => (
          //列出item陣列裏的所有items
          <ListItem
            key={item.id}
            item={item}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
