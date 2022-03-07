import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import {
    PaperAirplaneIcon,
    PencilIcon,
    CubeIcon, EyeIcon, TicketIcon,
} from '@heroicons/react/solid'
import {FormEvent} from "react";
import classnames from "classnames";

type Props = {
    isOpen: boolean
    handleClose: () => void
    isHighContrastMode: boolean
}


export const LoginModal = ({ isOpen, handleClose, isHighContrastMode }: Props) => {

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    };

    const buttonClass = classnames(
       'text-white font-bold py-2 px-4 rounded shadowed',
       {
           'bg-blue-500 border-blue-500': !isHighContrastMode,
           'bg-orange-500 border-orange-500': isHighContrastMode,
       }
    )

    const textClass = classnames(
       'px-4 font-bold text-sm',
       {
           'text-blue-500 hover:text-blue-600': !isHighContrastMode,
           'text-orange-500 hover:text-orange-600': isHighContrastMode,
       }
    )

    return (
       <BaseModal title="Login" isOpen={isOpen} handleClose={handleClose}>
           <div className="" onSubmit={handleSubmit}>
               <form className="px-8 pt-6 pb-8 mb-2">
                   <div className="mb-4">
                       <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="username" type="text" placeholder="Username"/>
                   </div>
                   <div className="mb-4">
                       <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          id="password" type="password" placeholder="******************"/>
                   </div>

                   <div className="mb-4">
                       <button
                          className={buttonClass}
                          autoFocus
                          type="button">
                           Sign In
                       </button>
                   </div>

                   <div className="mb-3">
                       <p className="underline underline-offset-2">
                           <a className={textClass}
                              href="#">
                               Forgot Password?
                           </a>
                       </p>

                   </div>

                   <p className="underline underline-offset-2">
                       <a className={textClass}
                          href="#">
                           Signup instead.
                       </a>
                   </p>

               </form>
               <p className="text-center text-gray-500 text-xs">
                   &copy;2022 F1rdle
               </p>
           </div>
       </BaseModal>
    )
}
