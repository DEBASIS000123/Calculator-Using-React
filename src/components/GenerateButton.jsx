import style from './GenerateButton.module.css'
let GenerateButton=({BtnList,onBtnClick})=>{
  return <>
  <div className={style["btn-container"]}>
  {
  BtnList.map((item)=>(
    <button key={item} className={style.button}
    onClick={()=>onBtnClick(item)}>{item}</button>
  ))
  }
  
  <button onClick={()=>onBtnClick("=")} className={style.lastbtn}>=</button>
  </div>
  </>
}
export default GenerateButton