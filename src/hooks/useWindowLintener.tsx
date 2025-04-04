
import { useEffect, useState } from "react";

export default function useWindowLintener(eventType:string, listener:EventListener){

    
        useEffect(()=>{
        
    
            window.addEventListener(eventType,listener)
    
            return ()=>{
                window.removeEventListener(eventType,listener)
            }
    
        },[])
}