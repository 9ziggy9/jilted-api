const GET_ALL = "groups/GET_ALL";
const ADD = "groups/ADD";

const _getGroups = (groups) => ({
  type: GET_ALL,
  payload: groups,
});

const _addGroup = (group) => ({
  type: ADD,
  payload: group,
});

export const getGroups = () => async (dispatch) => {
  const res = await fetch(`/api/group/all`);
  if (res.ok) {
    const data = await res.json();
    dispatch(_getGroups(data));
  }
};

export const randGroup = (size) => async (dispatch) => {
  const res = await fetch(`/api/group/gen_rand`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({size})
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(_addGroup(data.new_group));
  }
};

export default function reducer(state=[], action) {
  switch(action.type) {
  case ADD: return [action.payload, ...state];
  case GET_ALL: return [...state, ...action.payload];
  default: return state;
  }
}
