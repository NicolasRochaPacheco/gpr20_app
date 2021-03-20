
import "../index.css"
import "./Survey.css"

import Button from "./misc/Button"

function Survey() {
  return(
    <div className="survey">
      <div className="survey-config">
        <div className="glass-component survey-panel">
          SURVEY SETUP
        </div>

        <div className="glass-component survey-panel">
          VNA SETUP
        </div>
      </div>

      <div className="glass-component main-control">
        <Button label="START" disabled={true} />
        <Button label="STOP" />
      </div>
    </div>
  );
}

export default Survey;