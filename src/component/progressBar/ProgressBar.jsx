import "./progressBar.css"
//進度條元件
// props 接收：
// percent：completed==true 數量傳入 進度條
function ProgressBar({ percent }) { 
  return (
    <div className="container">
      <div className="flex">
        <p className="progress-bar-text main-color">{percent}%</p>
        <div style={{ flex: 1 }}>
          <div
            className="progress"
            id="custom-progress"
            role="progressbar"
            aria-label="progress"
            aria-valuenow={percent}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar"
              id="custom-progress-bar"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;