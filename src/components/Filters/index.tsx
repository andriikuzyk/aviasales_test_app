import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {SET_CHECKBOX_FILTER} from "../../store/types/tickets";

const FiltersWrapper  = styled.div`
  background: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding:  20px;
  min-width: 232px;
  .container {
    padding: 10px 10px 10px 35px;
    display: block;
    position: relative;
    margin-bottom: 20px;
    //text-align: center;
    cursor: pointer;
    
    &:hover {
      background-color: #F1FCFF;
    }
  }
 
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }


  .checkmark {
    position: absolute;
    top: 8px;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }
  
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  .container input:checked ~ .checkmark {
    background-color: #2196F3;
  }
  
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
const FilterLabel = styled.p`
  text-transform: uppercase;
  color: #4A4A4A;
  font-size: 12px;
  line-height: 12px;
  font-weight: 600;
`

const CheckedItem = styled.span`
  font-size: 13px;
  color: #4A4A4A;
`

const CheckedList = styled.div`
  margin-top: 20px;
`

const Filters = () => {
    const [isChecked, setIsChecked] = useState({
        allChecked: true,
        WithoutTransfersChecked: false,
        oneTransfer: false,
        twoTransfer: false,
        thirdTransfer: false
    });

    const dispatch = useDispatch()

    const {allChecked, WithoutTransfersChecked, oneTransfer, thirdTransfer, twoTransfer} = isChecked

    const handleInputChange =(event:any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const payload = {...isChecked,[name]: value }

        setIsChecked(payload)
        dispatch({type: SET_CHECKBOX_FILTER, payload })
    }

    return (
        <FiltersWrapper>
            <FilterLabel>
                Количество пересадок
            </FilterLabel>
            <CheckedList>
                <label className="container">
                    <input name='allChecked'
                           type="checkbox"
                           onChange={event =>handleInputChange(event)}
                           checked={allChecked}/>
                    <span className="checkmark"/>
                    <CheckedItem>
                        Все
                    </CheckedItem>
                </label>
                <label className="container">
                    <input name='WithoutTransfersChecked'
                           type="checkbox"
                           onChange={event =>handleInputChange(event)}
                           checked={WithoutTransfersChecked}/>
                    <span className="checkmark"/>
                    <CheckedItem>
                        Без пересадок
                    </CheckedItem>

                </label>
                <label className="container">
                    <input name='oneTransfer'
                           type="checkbox"
                           onChange={event =>handleInputChange(event)}
                           checked={oneTransfer}/>
                    <span className="checkmark"/>
                    <CheckedItem>
                        1 пересадка
                    </CheckedItem>

                </label>
                <label className="container">
                    <input name='twoTransfer'
                           type="checkbox"
                           onChange={event =>handleInputChange(event)}
                           checked={twoTransfer}/>
                    <span className="checkmark"/>
                    <CheckedItem>
                        2 пересадки
                    </CheckedItem>
                </label>
                <label className="container">
                    <input name='thirdTransfer'
                           type="checkbox"
                           onChange={event =>handleInputChange(event)}
                           checked={thirdTransfer}/>
                    <span className="checkmark"/>
                    <CheckedItem>
                        3 пересадки
                    </CheckedItem>
                </label>
            </CheckedList>

        </FiltersWrapper>
    );
};

export default Filters;
