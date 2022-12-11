
import React from 'react'
import { useCalendar, useUiStore } from '../../hooks';


export const FabDelete= () => {
    const { startDeletingEvent, hasEventSelected } = useCalendar();
    const { isDateModalOpen } = useUiStore();

    const handleDelete = () => {
      startDeletingEvent();
    }

  return (
    <button
    className='btn btn-danger fab-danger'
    onClick={ handleDelete }
    style={{
      display: hasEventSelected && !isDateModalOpen ? '' : 'none',
    }}
    >
        <i className='fas fa-trash-alt'></i>
    </button>
  )
}
