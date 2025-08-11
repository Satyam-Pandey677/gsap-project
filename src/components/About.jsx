import React from 'react'

const About = () => {
  return (
    <div id='about'>
        <div className='mb-16 md:px-0 py-5'>
            <div className='content'>
                <div className='md:col-span-8'>
                    <p className='badge'>Best Cocktails</p>
                    <h2>Where every details matters <span className='text-white'>-</span>
                        from muddle to garnish
                    </h2>
                </div>

                <div className='sub-content'>
                    <p >
                        Every concktail we serve is reflection of our obsession with detail -from the first muddle to final garnish. That care is what turns a simple drink into something truly memoreble.
                    </p>
                    <div>
                        <p className='md:text-3xl text-xl font-bold'>
                            <span>4.5</span>/5
                        </p>
                        <p className='text-sm text-white-100'>
                            More than +12000 customers
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='top-grid'>
            <div className='md:col-span-3'>
                <div className='noisy'/>
                <img src="/images/abt1.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About