import MemberTools from "../MemberTools";
import "../../index.css";
import {ModalProvider} from "../../modal";

const MemberRoster = () => {
  return (
    <div id="members-container">
      <h1>AVAILABLE</h1>
      <ul id="members-list">
	<li className="members-entry row-color-0">
          Hello, World
	</li>
	<li className="members-entry row-color-1">
          Goodbye, Moon
	</li>
	<li className="members-entry row-color-0">
          Hello, Test
	</li>
	<li className="members-entry row-color-0">
          Hello, World
	</li>
	<li className="members-entry row-color-1">
          Goodbye, Moon
	</li>
	<li className="members-entry row-color-0">
          Hello, Test
	</li>
	<li className="members-entry row-color-0">
          Hello, World
	</li>
	<li className="members-entry row-color-1">
          Goodbye, Moon
	</li>
	<li className="members-entry row-color-0">
          Hello, Test
	</li>
	<li className="members-entry row-color-0">
          Hello, World
	</li>
	<li className="members-entry row-color-1">
          Goodbye, Moon
	</li>
	<li className="members-entry row-color-0">
          Hello, Test
	</li>
      </ul>
      <ModalProvider>
	<MemberTools />
      </ModalProvider>
    </div>
  );
};

export default MemberRoster;
