/* eslint-disable no-unused-vars */
import {useContext, useState} from "react";
import {ModalContext} from "../../modal";
import {useDispatch, useSelector} from "react-redux";
import {addMember} from "../../store/members";

const AddMemberMenu = () => {
  const {handleModal} = useContext(ModalContext);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handling submission", `name: ${name}`);
    dispatch(addMember(name));
    handleModal();
  };

  return (
    <form id="add-member" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}/>
      <input className="green-hover" type="submit" value="add"/>
    </form>
  );
};

const MemberTools = () => {
  const {handleModal} = useContext(ModalContext);
  return (
    <div className="small-top-margin">
      <button className="green-hover" onClick={
	() => handleModal(<AddMemberMenu />)}>
	<span className="material-symbols-rounded">person_add</span>
      </button>
    </div>
  );
};

export default MemberTools;
