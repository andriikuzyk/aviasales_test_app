import React from 'react';
import styled from "styled-components";

const TicketItemWrapper = styled.div`
    margin-top: 0;
    padding: 16px;
    background: #FFFFFF;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 470px;
    border-radius: 5px;
  
  &:not(:first-child) {
    margin-top: 24px;
  }
`

const TicketItemLabel = styled.span`
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #2196F3;
  
`
const TicketHeaderWrapper = styled.h1`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TicketImgWrapper = styled.img`
    width: 110px;
    height: 36px;
`

const TicketInfoWrapper = styled.div`
    width: 80%;
    margin-top: 20px;
    //width: 80%;
`

const TicketInfoColumn = styled.div`
    display: flex;
    flex-direction: column;
`
const TicketInfoRow = styled.div`
    display: flex;
    justify-content: space-between;
`


const TicketInfoText = styled.span`
    color:#A0B0B9;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
`

const TicketTimeText = styled.span`
    margin-top: 4px;
    color:#4A4A4A;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    //min-width: 502px;
`

const TicketItem = (props: any) => {

    const getTimeFromMins = (mins: number) => {
        const hour = Math.trunc(mins/60);
        const min = mins % 60;
        return `${hour}ч ${min}м`;
    };

    const getTransferNumber = (props: any, segment: number) => {
        if (!props.item.segments[segment].stops.length) {
            return 'Без пересадок'
        } else if (props.item.segments[segment].stops.length === 1) {
            return  '1 пересадка'
        } else if (props.item.segments[segment].stops.length === 2 || 
                  props.item.segments[segment].stops.length === 3) {
            return `${props.item.segments[segment].stops.length} пересадки`
        };
    };    

    return (
        <TicketItemWrapper>
            <TicketHeaderWrapper>
                <TicketItemLabel>
                    {props.item.price} Р
                </TicketItemLabel>
                <TicketImgWrapper src={`http://pics.avs.io/99/36/${props.item.carrier}.png`}/>
            </TicketHeaderWrapper>
            <TicketInfoWrapper>
                <TicketInfoRow>
                    <TicketInfoColumn>
                        <TicketInfoText>
                            {props.item.segments[0].origin} - {props.item.segments[0].destination}
                        </TicketInfoText>
                        <TicketTimeText>
                            {props.item.segments[0].date}
                        </TicketTimeText>
                    </TicketInfoColumn>
                    <TicketInfoColumn>
                        <TicketInfoText>В пути</TicketInfoText>
                        <TicketTimeText>
                            {getTimeFromMins(props.item.segments[0].duration)}
                        </TicketTimeText>
                    </TicketInfoColumn>
                    <TicketInfoColumn>
                        <TicketInfoText>{getTransferNumber(props, 0)}</TicketInfoText>
                        <TicketTimeText>
                            {props.item.segments[0].stops.length ? 
                            props.item.segments[0].stops.join(', ') : null}
                        </TicketTimeText>
                    </TicketInfoColumn>
                </TicketInfoRow>
                <TicketInfoRow style={{marginTop: 20}}>
                    <TicketInfoColumn>
                        <TicketInfoText>
                            {props.item.segments[1].origin} - {props.item.segments[1].destination}
                        </TicketInfoText>
                        <TicketTimeText>{props.item.segments[1].date}</TicketTimeText>
                    </TicketInfoColumn>
                    <TicketInfoColumn>
                        <TicketInfoText>В пути</TicketInfoText>
                        <TicketTimeText>
                            {getTimeFromMins(props.item.segments[1].duration)}
                        </TicketTimeText>
                    </TicketInfoColumn>
                    <TicketInfoColumn>
                        <TicketInfoText>{getTransferNumber(props, 1)}</TicketInfoText>
                        <TicketTimeText>
                            {props.item.segments[1].stops.length ? 
                            props.item.segments[1].stops.join(', ') : null}
                        </TicketTimeText>
                    </TicketInfoColumn>
                </TicketInfoRow>
            </TicketInfoWrapper>
         </TicketItemWrapper>
    );
};

export default TicketItem;