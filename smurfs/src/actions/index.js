import axios from 'axios'

export const getSmurfs = () => (dispatch) => {
    console.log("getSmurfs Function activated")
    axios
        .get('http://localhost:3333/smurfs')
        .then((res) => {
            console.log(res.data)

            dispatch({ type: "FETCHING_SMURFS_SUCCESS", payload: res.data})
        })
    }

export const postSmurfs = (props) => (dispatch) => {
    console.log("postSmurfs function activated")
    axios.post('http://localhost:3333/smurfs', {
        name: props.name,
        age: props.age,
        height: props.height
        })
      .then((res) => {
          console.log('We posted')
          dispatch({type: 'POSTING_SMURFS', payload: res.data})
      })
}
