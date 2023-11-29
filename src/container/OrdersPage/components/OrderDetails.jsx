import React from 'react';
import {
  Toolbar,
  Typography,
  Button
} from "@material-ui/core";

import styled from 'styled-components';
import dummyData from '../dummyData.json'

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content  : space-around;
  border: 2px solid #1e1c1c11;
  border-radius: 5px;
  padding: 15px;
`;

const BoldDiv = styled.div`
  font-weight: 600;
  flex-wrap: wrap;
  word-break: break-all;
`
const DivBlock = styled.div`
  align-items: center;
`
const Divide = styled.div`
  border-left: 2px solid #cbcbcb;
  height: 60px;
`

const OrderDetails = () => {
  return (
    <FlexDiv>
      <DivBlock>
        <Typography variant='subtitle2'>Supplier</Typography>
        <BoldDiv>{dummyData.supplier}</BoldDiv>
      </DivBlock>
      <Divide />
      <DivBlock>
        <Typography variant='subtitle2'>Shiiping Date</Typography>
        <BoldDiv>{dummyData.shipping_date}</BoldDiv>
      </DivBlock>
      <Divide />
      <DivBlock>
        <Typography variant='subtitle2'>Total</Typography>
        <BoldDiv>{dummyData.total_cost}</BoldDiv>
      </DivBlock>
      <Divide />
      <DivBlock>
        <Typography variant='subtitle2'>Category</Typography>
        <BoldDiv>-Category</BoldDiv>
      </DivBlock>
      <Divide />
      <DivBlock>
        <Typography variant='subtitle2'>Department</Typography>
        <BoldDiv>{dummyData.department}</BoldDiv>
      </DivBlock>
      <Divide />
      <DivBlock>
        <Typography variant='subtitle2'>Status</Typography>
        <BoldDiv>{dummyData.status}</BoldDiv>
      </DivBlock>
    </FlexDiv>
  );
};

export default OrderDetails;