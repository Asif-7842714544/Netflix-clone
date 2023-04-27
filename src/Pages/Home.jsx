import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import requests from '../Request'

function Home() {
  return (
    <div>
        <Main />
        <Row rowId='1' title='Up Coming' fetchURL={requests.requestUpComing} />
        <Row rowId='2' title='Latest' fetchURL={requests.requestLatest} />
        <Row rowId='3' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowId='4' title='Top rated' fetchURL={requests.requestTopRated} />

    </div>
  )
}

export default Home