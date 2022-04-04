import { useDispatch, useSelector } from 'react-redux';
import { addCount, subtractCount } from '../actions/count'

export default function Count() {
    
  const dispatch  = useDispatch()
  const { count } = useSelector(state => state.count)

    return(
        <>
            <h1 className='pt-5'>Counter</h1>
            <div className='d-flex flex-row justify-content-center pt-3'>
                <button className='btn btn-danger' onClick={() => dispatch(subtractCount())}> - </button>
                <h3 className='px-3' > { count } </h3>
                <button className='btn btn-primary' onClick={() => dispatch(addCount())}> + </button>
            </div>
        </>
    )
}