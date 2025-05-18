import React, {useRef, useEffect} from 'react'

const TitleChanger = () => {

    const titleRef = useRef('Welcome to My App');

    useEffect (() => {
        document.title = titleRef.current;
    },[])

    const changeTitle = () => {
        titleRef.current = 'New Title Set Via useRef'; 
        document.title = titleRef.current;
    }
  return (
    <div>
      <h1>Check your browser tab title</h1>
      <button onClick={changeTitle}>Change Document Title</button>
    </div>
  )
}

export default TitleChanger
