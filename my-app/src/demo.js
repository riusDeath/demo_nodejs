const actionGenerator = (actionName) =>
  (status) =>
  (payload) => (
    {
      action: `${actionName}_${status}`,
      payload,
    }
);

const XActionGen = actionGenerator('X');
const XActionHandling = XActionGen('HANDLING');
const XActionSuccess = XActionGen('SUCCESS');
const XActionFailed = XActionGen('FAILED');
const xActionClear = XActionGen('CLEAR');

const XAction = () => async (dispatch) => {
 dispatch(XActionHandling());
 const res = await fetchApi('https://daynhauhoc.com');
 const json = await res.json();
 if (res.ok) dispatch(XActionSuccess(json));
 else dispatch(XActionFailed({errorMessage: json.message}));
}