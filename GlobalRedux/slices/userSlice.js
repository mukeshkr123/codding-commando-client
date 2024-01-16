import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../lib/api-client";
import toast from "react-hot-toast";
import { ErrorToast } from "@/components/error-toast";

// Create register action
export const registerAction = createAsyncThunk(
  "users/register",
  async (registerData, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.post("/users/register", registerData);
      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Internal server error";
      toast.error(errorMessage);
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Create login action
export const loginUserAction = createAsyncThunk(
  "users/login",
  async (loginData, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.post("/users/login", loginData);
      localStorage.setItem("userInfo", JSON.stringify(data.user));
      toast.success("Logged In");
      return data;
    } catch (error) {
      ErrorToast(error);
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Create logout action
export const logoutAction = createAsyncThunk(
  "users/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("userInfo");
    } catch (error) {
      toast.error("Something went wrong");
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Create fetchUserSession action
export const fetchUserSession = createAsyncThunk(
  "users/fetchUserSession",
  async (accessToken, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const { data } = await apiClient.get("/users/session", config);
      return data?.user;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Internal server error";
      toast.error(errorMessage);
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Get user from localStorage and place into store
const userLoggedIn =
  typeof localStorage !== "undefined"
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

// Define the initial state
const initialState = {
  userAuth: userLoggedIn,
  userSession: null,
  loading: false,
  appErr: null,
  serverErr: null,
  registered: null,
};

// Create usersSlice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}, // Add reducers if needed
  extraReducers: (builder) => {
    // Register action reducers
    builder.addCase(registerAction.pending, (state) => {
      state.loading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.loading = false;
      state.registered = action.payload;
    });
    builder.addCase(registerAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.error?.message;
      state.serverErr = action?.error?.message;
    });

    // Login action reducers
    builder.addCase(loginUserAction.pending, (state) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.userAuth = action?.payload;
      state.loading = false;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.appErr = action?.payload?.message || "Login failed";
      state.serverErr = action?.error?.message;
      state.loading = false;
    });

    // Fetch user session action reducers
    builder.addCase(fetchUserSession.pending, (state) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchUserSession.fulfilled, (state, action) => {
      state.userSession = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUserSession.rejected, (state, action) => {
      state.appErr = action?.payload?.message || "Failed to fetch user session";
      state.serverErr = action?.error?.message;
      state.loading = false;
    });

    // Logout action reducers
    builder.addCase(logoutAction.pending, (state) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(logoutAction.fulfilled, (state) => {
      state.userAuth = undefined;
      state.loading = false;
    });
    builder.addCase(logoutAction.rejected, (state, action) => {
      state.appErr = action?.payload?.message || "Logout failed";
      state.serverErr = action?.error?.message;
      state.loading = false;
    });
  },
});

export default usersSlice.reducer;
