export const initialState = {
    smurfArray: [
        {
          name: "Andrew",
          age: 34,
          height: "5cm",
          id: 2112
        }
    ]
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "FETCHING_SMURFS_SUCCESS":
            return {...state, smurfArray: action.payload}
        case "POSTING_SMURFS":
            return {...state, smurfArray: action.payload}
        default:
            return state
    }
}