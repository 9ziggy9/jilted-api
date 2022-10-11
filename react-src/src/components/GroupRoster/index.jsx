import "../../index.css";
import GroupTools from "../GroupTools";
import {ModalProvider} from "../../modal";

const GroupRoster = () => {
  return (
    <div id="group-container">
      <h1>GROUPS</h1>
	<div id="group-grid">
	  <div className="group-card">
	      <p>david</p>
	      <p>david</p>
	      <p>david</p>
	      <p>david</p>
	  </div>
	  <div className="group-card">
	      <p>jake</p>
	      <p>david</p>
	      <p>david</p>
	      <p>david</p>
	  </div>
	  <div className="group-card">
	      <p>john</p>
	      <p>david</p>
	      <p>david</p>
	      <p>david</p>
	  </div>
	  <div className="group-card">
	      <p>david</p>
	      <p>david</p>
	      <p>david</p>
	      <p>david</p>
	  </div>
	  <div className="group-card">
	      <p>jake</p>
	      <p>david</p>
	      <p>david</p>
	      <p>david</p>
	  </div>
	  <div className="group-card">
	      <p>john</p>
	      <p>david</p>
	      <p>david</p>
	      <p>david</p>
	  </div>
	  <div className="group-card">
	      <p>david</p>
	      <p>david</p>
	      <p>david</p>
	      <p>david</p>
	  </div>
	  <div className="group-card">
	      <p>jake</p>
	      <p>david</p>
	      <p>david</p>
	      <p>david</p>
	  </div>
	  <div className="group-card">
	      <p>john</p>
	      <p>david</p>
	      <p>david</p>
	      <p>david</p>
	  </div>
	</div>
	<ModalProvider>
	  <GroupTools />
	</ModalProvider>
    </div>
  );
};

export default GroupRoster;
