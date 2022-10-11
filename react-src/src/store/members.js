/* eslint-disable no-unused-vars */
const ADD = "members/ADD";
const GET_ALL = "members/GET_ALL";

const _addMember = (mem) => {
  return {
    type: ADD,
    payload: mem
  };
};

const _getMembers = (members) => ({
  type: GET_ALL,
  payload: members,
});

export const addMember = (name) => async (dispatch) => {
  const res = await fetch(`/api/member`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name})
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(_addMember(data));
  }
};

export const getMembers = () => async (dispatch) => {
  const res = await fetch(`/api/member/all`);
  if (res.ok) {
    const data = await res.json();
    dispatch(_getMembers(data));
  }
};

export default function reducer(state, action) {
  switch(action.type) {
  case ADD: return [action.payload, ...state];
  case GET_ALL: return [...action.payload];
  default: return [];
  }
}
