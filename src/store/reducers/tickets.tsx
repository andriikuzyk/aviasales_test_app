import {UPDATE_TICKETS, TicketsActionTypes,  TicketsState, UPDATE_SEARCH_ID,SET_BUTTON_FILTER, SET_CHECKBOX_FILTER, FETCH_FAILED} from "../types/tickets";

const INITIAL_STATE: TicketsState = {
    tickets: null,
    searchID: null,
    currentButtonFilter: 'low',
    currentCheckboxFilter: {
        allChecked: true,
        WithoutTransfersChecked: false,
        oneTransfer: false,
        twoTransfer: false,
        thirdTransfer: false
    },
};

export default function tickets (
    state = INITIAL_STATE,
    action: TicketsActionTypes): TicketsState {
    switch (action.type) {
        case UPDATE_TICKETS:
            return {
               ...state,
                tickets: action.tickets
            }
        case UPDATE_SEARCH_ID:
            return {
                ...state,
                searchID: action.id,

            }
        case SET_BUTTON_FILTER:
            return {
                ...state,
                currentButtonFilter: action.payload
            }
        case SET_CHECKBOX_FILTER:
            
            return {
                ...state,
                currentCheckboxFilter: action.payload
            }
        case FETCH_FAILED:
            return {
                ...state, tickets: []
            }
        default: return state
    }
}