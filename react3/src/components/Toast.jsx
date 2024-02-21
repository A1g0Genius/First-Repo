import React, { useEffect, useRef, useState } from 'react'
import '../css/toast.css'
import { useSelector } from 'react-redux'

const Toast = () => {

    const toastDetail = useSelector(state => state.toastData.toast)
    
    const [visible,setVisible]=useState("hidden")
    
    const customColors = {
        'alert': "#cc3300",
        'warning': "#ffcc00",
        'success':"#339900"
    }


    useEffect(() => {
        if (toastDetail.display !== "none") {
            setVisible("absolute")
            setTimeout(() => {
                setVisible("hidden")
            },5000)
        }
    }, [toastDetail])
    


  return (
      <>
          <div className={`toast-container text-white max-w-fit px-4 py-3 rounded-md ${visible}  `} style={{backgroundColor:customColors[toastDetail.detail.type]}}>
              <div className="toast-msg">{toastDetail.detail.msg}</div>
        </div>
      </>
  )
}

export default Toast