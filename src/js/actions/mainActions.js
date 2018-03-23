export const GET_DATA = 'GET_DATA';
export const getData = () => {
    return function(dispatch) {
        window.setTimeout(() => {
            dispatch({
                feeds: []
            })
        }, 2000);
    }
};
