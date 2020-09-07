import React from 'react'
import { Card } from './index'
import { useSelector, useDispatch } from 'react-redux'
import { fethApartments } from '../redux/actions/apartments'
import MyLoader from './Card/CardLoading'

function Cards() {
    const state = useSelector(({ apartments }) => apartments);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fethApartments())
    }, []);

    return (
        <div className="container">
            <div className="cards">
                {
                    state.isLoaded 
                        ? state.apartments.map((obj, index) => {return <Card key={`${obj.name + index}`} apartment={obj} />})
                        : Array(12).fill(0).map((_, index) => <MyLoader key={index} />)
                }
            </div>
        </div>
    )
}

export default Cards
