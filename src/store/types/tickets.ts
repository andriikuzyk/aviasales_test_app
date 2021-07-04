export const UPDATE_TICKETS = "UPDATE_TICKETS";
export const UPDATE_SEARCH_ID = "UPDATE_SEARCH_ID";
export const SET_BUTTON_FILTER = "SET_BUTTON_FILTER";
export const SET_CHECKBOX_FILTER = "SET_CHECKBOX_FILTER";
export const FETCH_FAILED = "FETCH_FAILED";

export interface Ticket {
    carrier: string;
    price: string;
    img: string;
}

export interface TicketCheckboxes {
    allChecked: boolean,
    WithoutTransfersChecked: boolean,
    oneTransfer: boolean,
    twoTransfer: boolean,
    thirdTransfer: boolean
}

export interface TicketsState {
    tickets: null | Ticket[];
    searchID: null | string;
    currentButtonFilter: string,
    currentCheckboxFilter: TicketCheckboxes
}

interface GetTickets {
    type: typeof UPDATE_TICKETS,
    tickets: Ticket[]
}

interface FailedTickets {
    type: typeof FETCH_FAILED
}

interface GetSearchId {
    type: typeof UPDATE_SEARCH_ID,
    id: string
}

interface SetButtonFilter {
    type: typeof SET_BUTTON_FILTER,
    payload: string
}

interface SetCheckboxFilter {
    type: typeof SET_CHECKBOX_FILTER,
    payload: TicketCheckboxes
}



export type TicketsActionTypes = | GetTickets | GetSearchId | SetButtonFilter | SetCheckboxFilter | FailedTickets;