import { ReactNode, useContext, useEffect, useState } from "react"
import _ from 'lodash';
import { NotifyContext } from "@/providers/NotifyProvider";

const FormError = () => {
    const [errors, setErrors] = useState({});
    const [errorKeys, setErrorKeys] = useState<Array<String>>([]);
    const {notify} = useContext(NotifyContext)


    const errorClass = (key: string) => {
      return  { 'p-invalid' : _.isObject(errors) ? errors.hasOwnProperty(key) : false}
    }
  
    const ErrorMessage = (key: string) => {
        useEffect(() => {
            if (!errorKeys.includes(key)) setErrorKeys([...errorKeys, ...[key]])
        })
        if(_.isObject(errors)){
            return _.map(errors, (messages, errorKey) => {
                if(errorKey === key) {
                    if(_.isString(messages)) {
                        return <small className="p-error text-red-400" key={key}>{messages}</small>
                    }
                    return _.map(messages, (msg: string) => <small className="p-error text-red-400" key={key}>{msg}</small>)
                }
                return ''
            })
        }
        return ''
    }


    const showErrors = (payload: any) => {
        setErrors(payload)

        if(_.isObject(payload)) {
            _.forEach(payload, (error, key) => {
                if(!errorKeys.includes(key)) {
                    if(_.isString(error)) {
                        notify?.current?.show({severity: 'warn', detail: error, life: 10000});
                    } else {
                        _.forEach(error, (message?: ReactNode) => {
                            setTimeout(() => {
                                notify?.current?.show({severity: 'warn', detail: message, life: 10000});
                            }, 100)
                        })
                    }
                }
            })
        }else if(_.isString(payload)) {
            notify?.current?.show({severity:'warn', detail: payload, life: 10000});
        }

    }
  
    return {errorClass, ErrorMessage, showErrors}
  }

  export default FormError