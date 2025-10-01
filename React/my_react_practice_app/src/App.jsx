
// import React, { Suspense, useState } from 'react';
import './App.css'
// import { Parent } from './components/ParentToChild'
// import ChildToParent from './components/ChildToParent/ChildToParent'
import Counter from './components/counter/counter'
// import TwoInputSame from './components/twoInputSame/TwoInputSame'
// import UncontrolledComponent from './components/uncontrolledComponent/UncontrolledComponent'
// import ConditionalRenderingDemo from './components/ConditionalRenderingDemo'
// import UseContext from './components/UseContext/UseContext'
// import Portals from './components/Portals/Portals';
// import Parent from './components/useCallback/Parent'
// import LocalStorageList from './components/LocalStorageList'
// import ListUI from './components/ListUI'
// import ToggleButtonReducer from './components/ToggleButton/ToggleButtonReducer'
// import ToggleButtonState from './components/ToggleButton/ToggleButtonState'

// import ToDoApp from './components/To-DoUseReducer/ToDoApp'

// import CounterWithReducer from './components/CounterWithReducer'
// import CounterWithState from './components/CounterWithState'

// import CustomAlert from './components/Alerts/CustomAlert'
// import BasicAlert from './components/Alerts/BasicAlert'

// import ExpensiveCalculation from './components/ExpensiveCalculation'

// import ClickCounter from './components/HOC/ClickCounter'
// import WithCounter from './components/HOC/WithCounter'

// import WindowSizeComponent from './components/WindowSizeComponent'
// import UseRefTimer from './components/UseRefTimer'
// import CounterComponent from './components/CustomHookCounter.js/CounterComponent'

// import CounterControls from './components/useContextConter/CounterControls'
// import CounterDisplay from './components/useContextConter/CounterDisplay'
// import CounterProvider from './components/useContextConter/CounterProvider'

// import AsyncInsideUseEffect from './components/AsyncInsideUseEffect'
// import LifeCycleExample from './components/LifeCycleExample'
// import LiveHeading from './components/LiveHeading'
// import MatchInputs from './components/MatchInputs'
// import RefStorageExample from './components/RefStorageExample'
// import ParentComponent from './components/CommChild-ParentUseRef.jsx/ParentComponent'
//  import ParentComponent from './components/PassingCallback/ParentComponent'
// import ParentComponent from './components/PassiingState/ParentComponent'
// import Counter  from './components/Counter'
// import TextColorChanger from './components/TextColorChanger'
// import BackGroundChanger from './components/BackGroundChanger'
// import TitleChanger from './components/TitleChanger'
// import ReducerStopWatch from './components/ReducerStopWatch'
// import StopWatch from './components/stopWatch'


// import Timer from './components/Timer'

// const EnhancedClickCounter = WithCounter(ClickCounter);

//Lazy import

// const HeavyComponent = React.lazy(() => import('./components/HeavyComponent'));

function App() {

  // const [show, setShow] = useState(false);

  return (
    <>
      {/* <Timer/> */}
      {/* <StopWatch/> */}
      {/* <ReducerStopWatch/> */}
      {/* <TitleChanger/> */}
      {/* <BackGroundChanger/> */}
      {/* <TextColorChanger/> */}
      {/* <Counter/> */}
      {/* <ParentComponent/> */}
      {/* <ParentComponent/> */}
       {/* <ParentComponent/>  */}
      {/* <RefStorageExample/> */}
      {/* <MatchInputs/> */}
      {/* <LiveHeading/> */}
      {/* <LifeCycleExample/> */}
      {/* <AsyncInsideUseEffect/> */}

      {/* <CounterProvider>
        <div style={{textAlign: 'center', marginTop:'40px'}}>
          <h1>useContex Counter</h1>
          <CounterDisplay/>
          <CounterControls/>
        </div>
      </CounterProvider> */}
      
      {/* <CounterComponent/> */}
      {/* <UseRefTimer/> */}
      {/* <WindowSizeComponent/> */}
      {/* <div>
        <h1>Higher-Order Component Example</h1>
        <EnhancedClickCounter/>
      </div> */}
      {/* <ExpensiveCalculation/> */}
      {/* <BasicAlert/> */}
      {/* <CustomAlert/> */}
      {/* <CounterWithState/> */}
      {/* <CounterWithReducer/> */}
      {/* <ToDoApp/> */}
      {/* <ToggleButtonState/> */}
      {/* <ToggleButtonReducer/> */}
      {/* <ListUI/> */}
      {/* <LocalStorageList/> */}
      {/* <Parent/> */}
      {/* <div style={{ padding: '20px'}}>
        <h1> 🚀 Lazy Loding Example</h1>
        <button onClick={() => setShow(true)}>
          Load Heavy Component
        </button>
        <Suspense fallback = { <p>Loading...</p>}>
          {show && <HeavyComponent/>}
        </Suspense>
      </div> */}
      {/* <Portals/> */}
      {/* <UseContext/> */}
      {/* <ConditionalRenderingDemo/> */}
      {/* <Parent/> */}
      {/* <ChildToParent/> */}
      {/* <UncontrolledComponent/> */}
      {/* <TwoInputSame/> */}
      <Counter/>
    </>
  )
}

export default App
