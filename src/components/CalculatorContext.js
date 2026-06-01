"use client";
import { createContext, useContext } from "react";

export const CalculatorContext = createContext({ embedded: false });
export const useCalculatorEmbedded = () => useContext(CalculatorContext);
