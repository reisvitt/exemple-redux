import React, { useState } from 'react'
import { connect } from 'react-redux'
import  lixeira  from '../../files/lixeira.png'
import  Modal from 'react-awesome-modal'

import './styles.css'

const List = ({store, dispatch}) => {
  const [modalVisibility, setModalVisibility] = useState(false)


  function taggleDelete(task){
    return {
      type: 'DELETE_TASK',
      task
    }
  }

  return(
    <>
      <h2>Tasks</h2>
      <ul>
        {store.map(item => {
          return <li key={item}>
              <div className="item-list">
                <label>{item}</label> 
                <img src={lixeira} onClick={() => {
                  dispatch(taggleDelete(item))
                  setModalVisibility(true)
                  setTimeout(() => {
                    setModalVisibility(false)
                  }, 1500);
                }} alt="lixeira" />
              </div>
            </li>
        })}

      </ul>

      <Modal visible={modalVisibility} width="250" height="150" effect="fadeInUp" onClickAway={() => setModalVisibility(false)}>
          <div className="modal">
            <h1>Item Deleted</h1>
          </div>
      </Modal>
    </>
  )
}

export default connect(store => ({store}))(List)