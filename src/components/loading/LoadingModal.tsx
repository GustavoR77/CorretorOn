"use client";
import {Dialog} from "primereact/dialog";
import {ProgressSpinner} from "primereact/progressspinner";
import { useEffect } from "react";

const LoadingModal = ({disabled = false, visible = false, onHide}: {
    disabled?: boolean;
    visible?: boolean;
    onHide?: ((v: boolean) => void);
}) => {

    useEffect(() => {
        if(!visible && typeof onHide == 'function' ) onHide!(false)
    }, [visible])

    return <>
     
        { ( !disabled ) &&
        <div>
            { visible &&
            <div className="grid fixed table bg-[#00000063] w-full h-full top-0 botom-0  z-50 place-content-center">
                <ProgressSpinner className={'m-auto table'} style={{width: '60px', height: '60px'}} animationDuration={'2s'} />
            </div>
            }
        </div>
        }
    </>
}


export default LoadingModal