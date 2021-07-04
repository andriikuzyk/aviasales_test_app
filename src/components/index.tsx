/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import styled from "styled-components";
import TicketsList from "./TIcketsList";
import Filters from "./Filters";
import NavButtons from "./NavButtons/NavButtons";
import {useDispatch} from "react-redux";
import {getTickets} from "../store/actions/tickets";
import AirLine from '../assets/AirLine.png'

const ContainerWrapper = styled.div`
  padding-top: 24px;
  display: flex;
  flex: 1;
  justify-content: space-between;
`

const ContainerInner = styled.div`
  padding-top: 60px;
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 960px;
  min-width: 960px;
  margin: 0 auto;
  height: 100vh;
`

const ImageWrapper = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 auto;
`

const FiltersWrapper = styled.div`
`
const TicketsWrapper = styled.div`
  width: 65%;
`

const Container = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTickets())
    }, [])

    return (
        <ContainerInner>
            <ImageWrapper src={AirLine}/>
            <ContainerWrapper>
                <FiltersWrapper>
                    <Filters/>
                </FiltersWrapper>
                <TicketsWrapper>
                    <NavButtons />
                    <TicketsList />
                </TicketsWrapper>
            </ContainerWrapper>
        </ContainerInner>

    );
};

export default Container;
