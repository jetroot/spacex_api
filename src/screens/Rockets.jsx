import React from 'react';
import { GET_SPACEX_ROCKETS } from '../query';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
const Header = React.lazy(() => import('../components/Header'));

function Rockets() {
    const { loading, error, data } = useQuery(GET_SPACEX_ROCKETS);
    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        data && setRockets(data.rockets);
    }, [rockets, data, loading])

  return (
    <>
        <div className='mt-6'>
            <Header label={'SpaceX Rockets'} btnLabel={'Rockets'} />

            {loading && <h1>Loding...</h1> }
        </div>
        <div className='max-md:grid-cols-1 mx-6 mt-6 grid grid-cols-2 gap-4'>
        {!loading && rockets.map((rocket, index) => {
            return <div className='bg-slate-100 hover:shadow-lg hover:shadow-slate-200 p-4' key={index}>
                    <div className='flex justify-between w-full'>
                        <p className='font-bold'>{rocket.name}</p>
                        <p>{rocket.mass.kg} Kg</p>
                    </div>

                    <div className='py-4 text-slate-500'>
                        {rocket.description}
                    </div>

                    <div className='flex justify-between'>
                        <p className='py-4 text-slate-500'>Cost per launch <span className='font-semibold text-slate-700'>{rocket.cost_per_launch}</span></p>
                        <p className='flex justify-center items-center'>
                            Designed by<span className='font-semibold pl-1'>
                            {rocket.company}</span>
                        </p>
                    </div>
                </div>
        })}
    </div>
    </>
  )
}

export default Rockets