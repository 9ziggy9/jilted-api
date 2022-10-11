/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import MemberTools from "../MemberTools";
import "../../index.css";
import {ModalProvider} from "../../modal";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMembers, delMember} from  "../../store/members";

const MemberRoster = () => {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members);

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  return (
    <div id="members-container">
      <h1>AVAILABLE</h1>
      <ul id="members-list">
        {members?.map((m,i) =>
          (<li
             className={`members-entry row-color-${i % 2}`}
             key={`m-${i}`}
             onClick={() => dispatch(delMember(m.id))}>
             {m.name}
           </li>))}
      </ul>
      <ModalProvider>
	<MemberTools />
      </ModalProvider>
    </div>
  );
};

export default MemberRoster;
