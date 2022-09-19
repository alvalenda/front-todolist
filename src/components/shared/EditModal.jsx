import './EditModal.css'
import Modal from 'react-modal'

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
      <div className='description'>
        <h2>Todo Item</h2>
        <p className='todo-item'>"{todoItem.todo}"</p>
        <span className='created-item'>Created: {todoItem.created_at}</span>
        <span className='completed-item'>
          Completed: {todoItem.completed_at}
        </span>
        <span className=''></span>
      </div>
      <div className='buttons-container'>
        <button
          onClick={() => handleConfirm(todoItem.id)}
          className={'delete-modal'}
        >
          EDIT
        </button>
        <button onClick={onRequestClose} version={'cancel-modal'}>
          Cancel
        </button>
      </div>
    </Modal>
  )
}

DeleteModal.defaultProps = {
  style: {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: '0px 50px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(25, 25, 25, 0.95)',
      borderRadius: '24px',
      border: 'none',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.8)',
    },
  },
  todoItem: {
    todo: 'Todo Item',
  },
}
