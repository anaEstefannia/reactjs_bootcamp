import React, {useState} from 'react'

export default function UserForm({onSubmit, onInputChange, value}) {

  return (
    <form style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
        <label htmlFor='inputUserName' style={{marginBottom: 15,}}>
            Username:
        </label>
        <div style={{width: '100%',marginBottom: 30}}>
            <input id={'inputUserName'} type={'text'} value={value} onChange={onInputChange} style={{width: '100%'}}/>
        </div>
        <button type='submit' onClick={onSubmit}>
            Search
        </button>
    </form>
  )
}
