import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const initialState = {
  loading:false,
  users:[],
  error:'',
  userbtn:false,
  detailsbtn:true,
  homeicon:true,
  saveIcon:false,
  homeIcon:true,
  searchbytitle:"",
}
export const fetchUsers=createAsyncThunk('user/fetchUsers',()=>{
  return axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response)=>response.data)
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers:(builder)=>{
    builder.addCase(fetchUsers.pending,(state)=>{
      state.loading=true;
    })
    builder.addCase(fetchUsers.fulfilled,(state,action)=>{
      state.loading=false,
      state.users=action.payload,
      state.error='';
    })
    builder.addCase(fetchUsers.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message;
    })

  },
  reducers: {
    changeButton:(state)=>{
      state.userbtn=!state.userbtn
      state.detailsbtn=!state.detailsbtn
      
    },
    changeHomeSaveIcon:(state)=>{
      state.saveIcon=!state.saveIcon;
      state.homeIcon=!state.homeIcon;
    },
    setSearchTitle:(state,action)=>{
      state.searchbytitle=action.payload;
    }
  }
  
})

// Action creators are generated for each case reducer function

export const { changeButton,changeHomeSaveIcon, setSearchTitle } = userSlice.actions
export default userSlice.reducer