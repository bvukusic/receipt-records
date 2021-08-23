export const addReceipt = (data : any) => {
    return (dispatch: any) => {
        dispatch({
            type: "receipts/add",
            payload: data
        });
    }
}

export const removeReceipt = (id : any) => {
    return (dispatch: any) => {
        dispatch({
            type: "receipts/remove",
            payload: id
        });
    }
}

export const selectReceipt = (id : any) => {
    return (dispatch: any) => {
        dispatch({
            type: "receipts/select",
            payload: id
        });
    }
}

export const updateReceipt = (data : any) => {
    return (dispatch: any) => {
        dispatch({
            type: "receipts/update",
            payload: data
        });
    }
}

export const calculateSum = () => {
    return (dispatch: any) => {
        dispatch({
            type: "receipts/calculateSum",
        });
    }
}