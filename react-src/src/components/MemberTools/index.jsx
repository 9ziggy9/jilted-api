import {useContext} from "react";
// eslint-disable-next-line no-unused-vars
import {ModalContext} from "../../modal";

const MemberTools = () => {
  const {handleModal} = useContext(ModalContext);
  return (
    <button onClick={() => handleModal(<p>Hello, World</p>)}>
      open
    </button>
  );
};

export default MemberTools;
