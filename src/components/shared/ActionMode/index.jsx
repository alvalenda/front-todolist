import { useContext } from 'react'
import { ActionMode as actionMode } from '../../../utils/actionmode.js'
import TodoContext from '../../../contexts/TodoContext.js'
import './ActionMode.css'

export const ActionMode = () => {
  const { activedMode, handleActivedMode } = useContext(TodoContext)
  console.log('activedMode', activedMode)

  return (
    <div className='container__actionMode'>
      <button
        onClick={() => handleActivedMode(actionMode.NORMAL)}
        className={`btn actionBtn ${activedMode === 'NORMAL' && 'active'}
          `}
      >
        NORMAL
      </button>
      <button
        onClick={() => handleActivedMode(actionMode.EDITING)}
        className={`btn actionBtn ${activedMode === 'EDITING' && 'active'}
        `}
      >
        EDIDINT
      </button>
      <button
        onClick={() => handleActivedMode(actionMode.DELETING)}
        className={`btn actionBtn ${activedMode === 'DELETING' && 'active'}
        `}
      >
        DELETING
      </button>
    </div>
  )
}
