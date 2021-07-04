/* eslint-disable no-mixed-operators */
import React from 'react';
import TicketItem from "../TicketItem";
import styled from "styled-components";
import { useSelector} from "react-redux";
import {RootState} from "../../store/store";
import loader from '../../components/loader.svg'

const TicketsListWrapper = styled.div`
  background-color: #F1FCFF;
  width: 100%;
`

const FlexTicketWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
`

const EmptyTicketsWrapperText = styled.h3`
    color: #4A4A4A;
    text-transform: uppercase;
    margin-left: -100px;
    
`

const TicketsList = () => {

    // @ts-ignore
    const {tickets, currentButtonFilter, currentCheckboxFilter} = useSelector((store: RootState) => store.tickets)
    const {
            allChecked,
            WithoutTransfersChecked,
            oneTransfer,
            twoTransfer,
            thirdTransfer
        } = currentCheckboxFilter
    // @ts-ignore
    const sortSwitch = (a, b) => {
        switch (currentButtonFilter) {
            case "low":
                return a.price - b.price;
            case "fast":
                // @ts-ignore
                return a.segments.reduce((accum, elem) => accum + elem.duration, 0) - b.segments.reduce((accum, elem) => accum + elem.duration, 0);
            case "optimal":
                // @ts-ignore
                return a.segments.reduce((accum, elem) => accum + elem.duration, 0) / a.price - b.segments.reduce((accum, elem) => accum + elem.duration, 0) / b.price
        }
    }
    // @ts-ignore
    const filterSwitch = (item) => {
        

        const stopsSum = item.segments[0].stops.length + item.segments[1].stops.length

        return allChecked
            || WithoutTransfersChecked && !stopsSum
            || oneTransfer && stopsSum === 1
            || twoTransfer && stopsSum === 2
            || thirdTransfer && stopsSum === 3
    }    

    if (!allChecked && !WithoutTransfersChecked && !oneTransfer && !twoTransfer && !thirdTransfer) return (
        <FlexTicketWrapper>
            <EmptyTicketsWrapperText>Билеты не найдены!</EmptyTicketsWrapperText>
        </FlexTicketWrapper>
    )

    return (
        <TicketsListWrapper>
            {
                tickets && tickets.length ? (
                //@ts-ignore
                    tickets && tickets // @ts-ignore
                    .sort((a, b) => sortSwitch(a, b))
                    .filter((item) => filterSwitch(item))//@ts-ignore
                    .map((item, index) => <TicketItem key={index} item={item} />)
                ) : (
                    <FlexTicketWrapper>
                        <img src={loader} width={50} alt={''} />
                    </FlexTicketWrapper>
                )
            }
        </TicketsListWrapper>
    );
};

export default TicketsList;
