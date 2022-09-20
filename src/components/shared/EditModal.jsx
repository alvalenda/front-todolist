import './EditModal.css'
import Modal from 'react-modal'
import ModalContext from '../../contexts/ModalContext'
import { useState, useEffect, useContext } from 'react'
import { MdEditNote, MdClose } from 'react-icons/md'
import { elapsedTime, printDate } from '../../utils/utils'

export const EditModal = ({ style, contentLabel }) => {
  const [editText, setEditText] = useState(() => '')
  const {
    isEditing,
    isEditingBtn,
    handleEditModal,
    handleEditButton,
    handleTextChange,
    selectedItem,
  } = useContext(ModalContext)

  useEffect(() => {
    console.log(editText)
    setEditText(() => selectedItem.todo ?? '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleEditButton])

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
        <h2>Todo Item</h2>
        <div className='text-container'>
          <label>Description</label>
          {!isEditingBtn ? (
            <p className='todo-item'> {selectedItem.todo}</p>
          ) : (
            <input
              name='edit-todo'
              type='text'
              id='edit-todo'
              value={editText}
              onChange={handleTextChange}
              autoFocus
            />
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
          <button onClick={handleEditButton} className={'edit-modal'}>
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
              onClick={() => console.log('Editei essa porra!')}
              className={'Btn'}
            >
              UPDATE
            </button>
          )}
          <button onClick={handleEditModal} className={'Btn cancel-modal'}>
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
      borderRadius: '18px',
      border: 'none',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.8)',
    },
  },
}
