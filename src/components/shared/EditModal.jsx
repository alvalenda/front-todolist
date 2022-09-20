import './EditModal.css'
import Modal from 'react-modal'
import { useState, useEffect } from 'react'
import { MdEditNote, MdClose } from 'react-icons/md'
import { elapsedTime, printDate } from '../../utils/utils'

export const EditModal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  style,
  contentLabel,
  isEditingBtn,
  handleEditBtn,
  handleConfirm,
  todoItem,
}) => {
  const [editText, setEditText] = useState(() => '')

  useEffect(() => {
    console.log(editText)
    setEditText(() => todoItem.todo ?? ' ')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleEditBtn])

  const handleTextChange = (e) => {
    const newText = e.target.value
    setEditText(() => newText)

    if (newText === '') {
      //   setBtnDisabled(() => true)
      //   setMessage(() => '')
      return
    }
    if (newText !== '' && newText.trim().length < 8) {
      //   setBtnDisabled(() => true)
      //   setMessage(() => 'Text must be at least 8 characters long')
      return
    }
    // setMessage(() => '')
    // setBtnDisabled(() => false)
  }

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
          {!isEditingBtn ? (
            <p className='todo-item'> {todoItem.todo}</p>
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

        {!isEditingBtn ? (
          <button onClick={handleEditBtn} className={'edit-modal'}>
            <MdEditNote size={30} />
          </button>
        ) : (
          <button onClick={handleEditBtn} className={'edit-modal'}>
            <MdClose size={30} />
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
          <button onClick={onRequestClose} className={'Btn cancel-modal'}>
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
  todoItem: {
    todo: 'Todo Item',
    created_at: '00/00/00',
    completed_at: '00/00/00',
  },
}
