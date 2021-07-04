import {FETCH_FAILED, UPDATE_SEARCH_ID, UPDATE_TICKETS} from "../types/tickets";
import axios from "axios";

export const getTickets = (): any => async (dispatch: any) => {
    try {
        const token = await axios.get("https://front-test.beta.aviasales.ru/search")
        const id: string = token.data.searchId;
        dispatch({type: UPDATE_SEARCH_ID, id})

        const response = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
        const payload = response.data.tickets;
        dispatch({type: UPDATE_TICKETS, tickets: payload})
    } catch (e) {
        dispatch({type: FETCH_FAILED})
    }
}