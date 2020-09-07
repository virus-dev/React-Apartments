import Axios from "axios"

const SET_APARTMENTS = 'SET_APARTMENTS'

export const fethApartments = () => dispatch => {
    setTimeout(() =>
        Axios.get('http://localhost:3000/entities.json').then(({ data }) => {
            dispatch(setApartments(data.apartments))
        })
    , 2000)
}

export const setApartments = action => ({
    type: SET_APARTMENTS,
    payload: action
})