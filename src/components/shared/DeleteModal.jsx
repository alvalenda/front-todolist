import './DeleteModal.css'
import Modal from 'react-modal'

export const DeleteModal = ({
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
        <p>You are about to delete the item:</p>
        <span>"{todoItem.todo}"</span>
      </div>
      <h2 className='subtitle'> Are You sure? </h2>
      <div className='buttons-container'>
        <button
          onClick={() => handleConfirm(todoItem.id)}
          className={'delete-modal'}
        >
          Yes
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
