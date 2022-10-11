/* eslint-disable no-unused-vars */
import "../../index.css";
import GroupTools from "../GroupTools";
import {ModalProvider} from "../../modal";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGroups} from "../../store/groups";

const GroupRoster = () => {
  const dispatch = useDispatch();
  const groups = useSelector(state => state.groups);

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  useEffect(() => {
    console.log("GROUPS", groups);
  }, [groups]);

  return (
    <div id="group-container">
      <h1>GROUPS</h1>
      <div id="group-grid">
	{groups?.map((g,i) => (
	  <div className="group-card" key={`gcard-${i}`}>
	    {g.members.map(m => (<p key={`gm-${m.id}`}>{m.name}</p>))}
	  </div>
	))}
      </div>
      <ModalProvider>
	<GroupTools />
      </ModalProvider>
    </div>
  );
};

export default GroupRoster;
