"use client";

import { LoadingContext } from "@/providers/LoadingProvider";
import { useContext } from "react";

const LoadingOverlay = ({skeleton, children, disabled, visible}: {
    skeleton: React.ReactNode, 
    children: React.ReactNode, 
    disabled?: boolean,
    visible: boolean
}) => {

    // const {type, visible, disabled } = useContext(LoadingContext)


    return (<>
        { (
            ( !disabled && visible) &&
                skeleton
            )
            || children
        }
        </>
    )
}
export default LoadingOverlay