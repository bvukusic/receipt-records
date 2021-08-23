import { startingList } from "../../helpers/examples";

const reducer = (state = {
    receipts: startingList,
    nextId: 3,
    selectedReceipt: null,
    sum: 336,
}, action: any) => {
    switch (action.type) {
        case 'receipts/add':
            return {
                ...state,
                nextId: state.nextId + 1,
                receipts: [...state.receipts, action.payload]
            }
        case 'receipts/remove':
            return {
                ...state,
                receipts: state.receipts.filter(item => item.id !== action.payload)
            }
        case 'receipts/select':
            if (action.payload === null)
                return {
                    ...state,
                    selectedReceipt: null
                }
            else
                return {
                    ...state,
                    selectedReceipt: state.receipts.find(item => item.id === action.payload)
                }

        case 'receipts/update':
            return {
                ...state,
                receipts: state.receipts.map((item, i) => item.id === action.payload.id ? action.payload
                    : item)
            }
        case 'receipts/calculateSum':
            return {
                ...state,
                sum: state.receipts.reduce((a, b) => a + (b["postTaxAmount"] || 0), 0),
            }
        default:
            return state;
    }
}

export default reducer;