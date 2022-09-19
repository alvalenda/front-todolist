import './EditModal.css'
import Modal from 'react-modal'
import { MdEditNote, MdClose } from 'react-icons/md'
import { elapsedTime, printDate } from '../../utils/utils'

export const EditModal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  style,
  contentLabel,
  handleConfirm,
  todoItem,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={style}
      contentLabel={contentLabel}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
    >
      <div className='modal-container'>
        <h2>Todo Item</h2>
        <div className='text-container'>
          <label>Description</label>
          <p className='todo-item'> {todoItem.todo}</p>
        </div>
        <div className='text-container'>
          <label>Created at</label>
          <span className='created-item'>
            {todoItem.created_at ? printDate(todoItem.created_at) : ' '}
          </span>
        </div>
        <div className='text-container'>
          <label>Finished at</label>
          <span className='completed-item'>
            {todoItem.completed
              ? printDate(todoItem.completed_at)
              : 'Incompleted'}
          </span>
        </div>
        <div className='text-container'>
          <label>Duration</label>
          <span className='duration-item'>{elapsedTime(todoItem)}</span>
        </div>

        <button
          onClick={() => handleConfirm(todoItem.id)}
          className={'delete-modal'}
        >
          <MdEditNote size={30} />
        </button>
        <button onClick={onRequestClose} version={'cancel-modal'}>
          <MdClose size={30} />
        </button>
      </div>
    </Modal>
  )
}

EditModal.defaultProps = {
  style: {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: '0',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(25, 25, 25, 0.95)',
      borderRadius: '18px',
      border: 'none',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.8)',
    },
  },
  todoItem: {
    todo: 'Todo Item',
    created_at: '00/00/00',
    completed_at: '00/00/00',
  },
}
