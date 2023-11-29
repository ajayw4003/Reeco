import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dummyData from './dummyData.json'

const initialState = {
  orderDetails: {},
  productObj: {},
  loading: false,
  error: null
}

// get order details API call 
export const getOrderDetails = createAsyncThunk('getOrderDetails', async() => {
  console.log('outside')
  try{
    const response = dummyData;
    console.log('insidee')
    return response
  } catch(err) {
    console.log(err)
    return err;
  }
})



const OrderDetailsSlice = createSlice({
  name: 'Order',
  initialState,
  reducers: {
    approveProduct: (state, action) => {
      console.log('action', action, state)
      if(state.productObj[action.payload]) {
        state.productObj[action.payload].status = 1
      }
    },
    rejectProduct: (state, action) => {
      if(state.productObj[action.payload]) {
        state.productObj[action.payload].status = 2
      }
    }
  },
  extraReducers: {
    [getOrderDetails.pending]: (state) => {
      state.loading = true;
    },
    [getOrderDetails.fulfilled]: (state, action) => {
      const tempObj = {};
      action?.payload?.products.map(item => {
        tempObj[item.product_id] = item;
      })
      state.orderDetails = action.payload;
      state.productObj = {...tempObj};
      state.loading = false;
    },
    [getOrderDetails.rejected]: (state, action) => {
      state.loading = false;
      state.orderDetails = {};
      state.productObj = {}
      state.error = action.payload
    },
  },
})

console.log('orderReducer', OrderDetailsSlice)
export const { approveProduct, rejectProduct } = OrderDetailsSlice.actions;

export default OrderDetailsSlice.reducer;