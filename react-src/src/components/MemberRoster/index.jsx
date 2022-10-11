/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import MemberTools from "../MemberTools";
import "../../index.css";
import {ModalProvider} from "../../modal";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMembers} from  "../../store/members";

const MemberRoster = () => {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members);

  useEffect(() => {
    dispatch(getMembers());
    console.log("dispatching for members");
    console.log(members);
  }, [dispatch]);

  useEffect(() => {
    console.log(members);
  }, [members]);

  return (
    <div id="members-container">
      <h1>AVAILABLE</h1>
      <ul id="members-list">
        {members?.map((m,i) =>
          (<li className={`members-entry row-color-${i % 2}`}>{m.name}</li>))}
      </ul>
      <ModalProvider>
	<MemberTools />
      </ModalProvider>
    </div>
  );
};

export default MemberRoster;
