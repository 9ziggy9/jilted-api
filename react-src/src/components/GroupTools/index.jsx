import {useContext} from "react";
import {ModalContext} from "../../modal";

const GroupTools = () => {
  const {handleModal} = useContext(ModalContext);
  return (
    <div className="small-top-margin">
      <button className="green-hover" onClick={
	() => handleModal(<button>Hello, Groups</button>)}>
	<span className="material-symbols-rounded">groups</span>
      </button>
    </div>
  );
};

export default GroupTools;
