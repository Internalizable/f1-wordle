import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import {
    PaperAirplaneIcon,
    PencilIcon,
    CubeIcon, EyeIcon, TicketIcon,
} from '@heroicons/react/solid'

type Props = {
    isOpen: boolean
    handleClose: () => void
}

export const ChangelogModal = ({ isOpen, handleClose }: Props) => {
    return (
       <BaseModal title="Changelog" isOpen={isOpen} handleClose={handleClose}>
           <p className="text-sm text-gray-500 dark:text-gray-300">
               The following is a list of changelogs to F1 Wordle.
           </p>

           <div className="flex justify-center mb-1 mt-4">
               <Cell
                  isRevealing={true}
                  isCompleted={true}
                  value="0"
                  status="correct"
               />
               <Cell
                  isRevealing={true}
                  isCompleted={true}
                  value="3"
                  status="correct"
               />
               <Cell
                  isRevealing={true}
                  isCompleted={true}
                  value="/"
                  status="present"
               />
               <Cell
                  isRevealing={true}
                  isCompleted={true}
                  value="0"
                  status="correct"
               />
               <Cell
                  isRevealing={true}
                  isCompleted={true}
                  value="3"
                  status="correct"
               />
               <Cell
                  isRevealing={true}
                  isCompleted={true}
                  value="/"
                  status="present"
               />
               <Cell
                  isRevealing={true}
                  isCompleted={true}
                  value="2"
                  status="correct"
               />
               <Cell
                  isRevealing={true}
                  isCompleted={true}
                  value="2"
                  status="correct"
               />
           </div>

           <div className="block mt-3 justify-center text-gray-500 dark:text-gray-300">
               <p className="text-sm mt-3">
                   <PaperAirplaneIcon className="h-5 w-5 inline-flex align-bottom"/> {' '}
                   Added the changelog modal.
               </p>
               <p className="text-sm mt-3 ml-1">
                   <PencilIcon className="h-5 w-5 inline-flex align-bottom"/> {' '}
                   Added additional words.
               </p>
               <p className="text-sm mt-3 ml-1">
                   <TicketIcon className="h-5 w-5 inline-flex align-bottom"/> {' '}
                   Reformatted the share message.
               </p>
               <p className="text-sm mt-3 ml-1">
                   <EyeIcon className="h-5 w-5 inline-flex align-bottom"/> {' '}
                   Fixed some visual bugs.
               </p>
               <p className="text-sm mt-3 ml-1">
                   <CubeIcon className="h-5 w-5 inline-flex align-bottom"/> {' '}
                   Fixed a bug where you could guess the same word twice.
               </p>
           </div>

       </BaseModal>
    )
}
