
import React from 'react'

const Todo = ({id,createdAt}) => {
  return (
    <tr>
      <td>
        <label htmlFor="">{id}</label>
      </td>
      <input type="text" />
      <td>
        <label htmlFor="">{createdAt}</label>
      </td>
    </tr>
  )
}

export default Todo