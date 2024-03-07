import './components/Container'
import './App.css'
import Container from './components/Container'
import style from './App.module.css'
import DisplayField from './components/DisplayFileld'
import GenerateButton from './components/GenerateButton'
import { useState } from 'react'

function App() {
  const BtnList=["C","1","2","3","4","5","6","7","8","9","0","+","-","*","/"];
  const [calval,setcalval]=useState("");
  const onBtnClick=(btnval)=> {
    if(btnval==='C'){
      setcalval("");
    }
    else if(btnval==='='){
      const result=eval(calval);
      setcalval(result);
    }
    else{
      const newDisplayVal=calval+btnval;
      setcalval(newDisplayVal);
    }
  }
  return (
    <Container>
      <h1>Calculator</h1>
      <div className={style.calculator}>
      <DisplayField DisplayData={calval}></DisplayField>
      <GenerateButton BtnList={BtnList} onBtnClick={onBtnClick}></GenerateButton>
      </div>
    </Container>
  )
}

export default App
