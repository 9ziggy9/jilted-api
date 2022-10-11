/* eslint-disable no-unused-vars */
const ADD = "members/ADD";

const addMemberAction = (name) => {
  console.log("HELLO, FROM ACTION!");
  return {
    type: ADD,
    payload: {
      name
    },
  };
};

export const addMember = (name) => async (dispatch) => {
  const res = await fetch(`/api/member`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name})
  });
  if (res.ok) {
    const data = await res.json();
    console.log(data);
  }
};

export default function reducer(state, action) {
  switch(action.type) {
  case ADD: {
    console.log("HELLO, FROM REDUCER!");
    console.log("Payload is: ", action.payload);
    return {...state, ...action.payload}; 
  }
  default: return {error: "NOPE"};
  }
}
