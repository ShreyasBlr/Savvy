"use client";

import { useMemo, useReducer, useEffect, useCallback } from "react";

import { GlobalContext } from "./global-context";

const initialState = {
  loading: true,
  categories: null,
};
