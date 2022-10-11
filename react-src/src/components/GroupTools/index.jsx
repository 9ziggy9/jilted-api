// import {useContext} from "react";
// import {ModalContext} from "../../modal";
import {useDispatch} from "react-redux";
import {randGroup} from  "../../store/groups";

const GroupTools = () => {
  // const {handleModal} = useContext(ModalContext);
  const dispatch = useDispatch();

  return (
    <div className="small-top-margin">
      <button className="green-hover" onClick={() => dispatch(randGroup(4))}>
	<span className="material-symbols-rounded">groups</span>
      </button>
    </div>
  );
};

export default GroupTools;
