import { useEffect } from "react"

const useTitle = title=>{
    useEffect(()=>{
        document.title = `Brain Blast|${title}`;
    },[title])
}

export default useTitle;