import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
  BookOpenIcon, UserIcon,
} from '@heroicons/react/outline'
import { GAME_TITLE } from '../../constants/strings'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsChangelogModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsChangelogModalOpen,
  setIsStatsModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5">

        <div className="left-icons">
          <InformationCircleIcon
              className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
              onClick={() => setIsInfoModalOpen(true)}
          />
          <UserIcon
              className="h-6 w-6 cursor-pointer dark:stroke-white"
              onClick={() => setIsChangelogModalOpen(true)}
          />
        </div>

        <p className="text-xl font-bold dark:text-white">{GAME_TITLE}</p>

        <div className="right-icons">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr/>
    </div>
  )
}
