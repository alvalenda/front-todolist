import './DialogModal.css'
import ModalContext from '../../../contexts/ModalContext'
import { useContext } from 'react'
import Modal from 'react-modal'

export const DialogModal = ({ onRequestClose, style, contentLabel }) => {
  const { isDeleting, handleDeleteModal, handleDeleteConfirm, selectedItem } =
    useContext(ModalContext)

  return (
    <Modal
      isOpen={isDeleting}
      onRequestClose={handleDeleteModal}
      style={style}
      contentLabel={contentLabel}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
    >
      <div className='description'>
        <p>You are about to delete the item:</p>
        <span>"{selectedItem.todo}"</span>
      </div>
      <h2 className='subtitle'> Are You sure? </h2>
      <div className='buttons-container'>
        <button
          onClick={() => handleDeleteConfirm(selectedItem.id)}
          className={'delete-modal'}
        >
          Yes
        </button>
        <button onClick={handleDeleteModal} version={'cancel-modal'}>
          Cancel
        </button>
      </div>
    </Modal>
  )
}

DialogModal.defaultProps = {
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
}
