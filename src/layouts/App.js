import React from 'react'
import Navigation from '../components/Navigation'

export default function App(props) {
    document.title = props.title
  return (
        <div>
            <Navigation></Navigation>
            <main className='mt-2'>
                <div className="">
                    {props.children}
                </div>
            </main>
        </div>
  )
}
