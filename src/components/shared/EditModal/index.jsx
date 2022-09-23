import './EditModal.css'
import Modal from 'react-modal'
import ModalContext from '../../../contexts/ModalContext'
import { useContext } from 'react'
import { MdEditNote, MdClose } from 'react-icons/md'
import { elapsedTime, printDate } from '../../../utils/utils.date'

export const EditModal = ({ style, contentLabel }) => {
  const {
    isEditing,
    isEditingBtn,
    editText,
    updBtnDisable,
    handleEditModal,
    handleEditButton,
    handleUpdate,
    handleTextChange,
    selectedItem,
  } = useContext(ModalContext)

  return (
    <Modal
      isOpen={isEditing}
      onRequestClose={handleEditModal}
      style={style}
      contentLabel={contentLabel}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
    >
      <div className='modal-container'>
        <h2>Todo Item {selectedItem.id && selectedItem.id}</h2>
        <div className='text-container'>
          <label>Description</label>
          {!isEditingBtn ? (
            <p className='todo-item'> {selectedItem.todo}</p>
          ) : (
            <form onSubmit={handleUpdate} id='edit-form'>
              <input
                name='edit-todo'
                type='text'
                id='edit-todo'
                value={editText}
                onChange={handleTextChange}
                autoFocus
              />
            </form>
          )}
        </div>
        <div className='text-container'>
          <label>Created at</label>
          <span className='created-item'>
            {selectedItem.created_at ? printDate(selectedItem.created_at) : ' '}
          </span>
        </div>
        <div className='text-container'>
          <label>Finished at</label>
          <span className='completed-item'>
            {selectedItem.completed
              ? printDate(selectedItem.completed_at)
              : 'Incompleted'}
          </span>
        </div>
        <div className='text-container'>
          <label>Duration</label>
          <span className='duration-item'>{elapsedTime(selectedItem)}</span>
        </div>

        {!isEditingBtn ? (
          <button
            type='button'
            onClick={handleEditButton}
            className={'edit-modal'}
          >
            <MdEditNote size={34} />
          </button>
        ) : (
          <button onClick={handleEditButton} className={'edit-modal'}>
            <MdClose size={34} />
          </button>
        )}
        <div className='buttons-container'>
          {isEditingBtn && (
            <button
              type={'form'}
              form={'edit-form'}
              className={'Btn'}
              disabled={updBtnDisable}
            >
              UPDATE
            </button>
          )}
          <button
            onClick={handleEditModal}
            type={'button'}
            className={'Btn cancel-modal'}
          >
            CLOSE
          </button>
        </div>
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
      borderRadius: '24px',
      border: 'none',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.8)',
    },
  },
}
