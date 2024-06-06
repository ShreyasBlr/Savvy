"use client";

import { useMemo, useEffect, useReducer, useCallback } from "react";

import { UserContext } from "./user-context";
import axiosInstance, { endpoints } from "@/utils/axios";

const initialState = {
  user: null,
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL":
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const response = await axiosInstance.get(endpoints.users.profile);
      const user = response.data;

      dispatch({
        type: "INITIAL",
        payload: {
          user,
        },
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: "INITIAL",
        payload: {
          user: null,
        },
      });
    }
  }, []);

  const login = useCallback(async ({ email, password }) => {
    try {
      const response = await axiosInstance.post(endpoints.users.login, {
        email,
        password,
      });
      const user = response.data;

      dispatch({
        type: "LOGIN",
        payload: {
          user,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.user ? "authenticated" : "unauthenticated";

  const status = state.loading ? "loading" : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      loading: status === "loading",
      isAuthenticated: status === "authenticated",
      unauthenticated: status === "unauthenticated",
      //
      login,
    }),
    [state.user, status, login]
  );

  return (
    <UserContext.Provider value={memoizedValue}>
      {children}
    </UserContext.Provider>
  );
};
