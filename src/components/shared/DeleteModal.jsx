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
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={style}
      contentLabel={contentLabel}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
    >
      <div className='description'>
        <p>You are about to delete the item:</p>
        <span>"{todoItem}"</span>
      </div>
      <h2 className='subtitle'> Are You sure? </h2>
      <div className='buttons-container'>
        <button onClick={handleConfirm} className={'delete-modal'}>
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
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(25, 25, 25, 0.95)',
      borderRadius: '24px',
      boxShadow: '0 0 1200px -1px rgb(0, 0, 0)',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.8)',
    },
  },
}
