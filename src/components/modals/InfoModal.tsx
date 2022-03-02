import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the F1 word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="W" />
        <Cell value="I" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="W" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="O"
          status="present"
        />
        <Cell value="A" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter O is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" />
        <Cell value="A" />
        <Cell value="U" />
        <Cell isRevealing={true} isCompleted={true} value="D" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter D is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Forked by {' '}
          <a
              href="https://twitter.com/CharSequence/"
              className="underline"
          >
              Elie
          </a>
              {' '}
          and publicly available on
          {' '}
          <a
              href="https://github.com/Internalizable/f1-wordle"
              className="underline font-bold"
          >
              github
          </a>.
      </p>

    </BaseModal>
  )
}
