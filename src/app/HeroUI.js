"use client"
import {HeroUIProvider, ToastProvider} from "@heroui/react";

export default function HeroUIWrapper({ children }) {
  return (
    <HeroUIProvider>
      <ToastProvider 
      

      />
      {children}
    </HeroUIProvider>
  );
}
