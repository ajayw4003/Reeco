import React, { useState } from 'react';
import dummyData from '../dummyData.json'
import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@mui/material';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import PrintIcon from '@mui/icons-material/Print';
import { Button } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

const TableDiv = styled(Paper)`
  margin-top: 15px;
  padding: 15px;
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  color: #847c7c;
`

const IconCell = styled(TableCell)`
  background-color: #e8e7e7;
`
const SearchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  border: 1px solid #2f2e2e;
  border-radius: 15px;
  padding: 2px;
  width: 30%;
`
const SearchIconWrapper = styled.div`
  height: 100%;
  margin-right: 5px;
  margin-top: 2px;
`
const StyledInputBase = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  margin-left: 4px;
  border-radius: 15px;
`
const PrintDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ButtonDiv = styled(Button)`
  border-radius: 19px;
  margin-right: 15px;
  color: #0a880a;
  border-color: #0a880a;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: green;
    color: white;
  }
`

const OrderContent = () => {
  return (
    <TableDiv elevation="1">
      <SearchDiv>
        <Search>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Search>
        <PrintDiv>
          <ButtonDiv variant='outlined'>Add Item</ButtonDiv>
          <PrintIcon />
        </PrintDiv>
      </SearchDiv>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.products.map((product) => (
            <TableRow
              key={product.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.brand || '-'}</TableCell>
              <TableCell align="right">{product.price || '-'}</TableCell>
              <TableCell align="right">{product.qty || '-'}</TableCell>
              <TableCell align="right">{product.total || '-'}</TableCell>
              <TableCell align="right">{product.status || '-'}</TableCell>
              <IconCell align="right">
                <IconDiv>
                  <CheckIcon />
                  <ClearIcon />
                  <span>Edit</span>
                </IconDiv>
              </IconCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableDiv>
  );
};

export default OrderContent;