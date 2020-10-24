import React, {useState} from 'react'

import {postSmurfs} from '../actions/index'

import { connect } from 'react-redux'


const Form = ({postSmurfs}) => {

    const [newSmurf, setNewSmurf] = useState({name: "", age: "", height: ""})

    const onChangeHandler = (e) => {
        //e.preventDefault()
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
        //setNewSmurf(e.target.value)
    }

    const addNewSmurf = (e) => {
        e.preventDefault()
        console.log('Add New smurf clicked')
        console.log(newSmurf)
        postSmurfs(newSmurf)
        setNewSmurf({name: "", age: "", height: ""})
    }

    return (
        <form>
            <input
                className="add-smurf-name"
                type="text"
                name="name"
                value={newSmurf.name}
                onChange={onChangeHandler}>
            </input>

            <input
                className="add-smurf-age"
                type="text"
                name="age"
                value={newSmurf.age}
                onChange={onChangeHandler}>
            </input>

            <input
                className="add-smurf-height"
                type="text"
                name="height"
                value={newSmurf.height}
                onChange={onChangeHandler}>
            </input>

            <button onClick={addNewSmurf}>Post Smurf</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
    }
  }

export default connect(mapStateToProps, { postSmurfs })(Form)