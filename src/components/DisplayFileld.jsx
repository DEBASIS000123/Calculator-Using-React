import style from './DisplayField.module.css'
function DisplayField({DisplayData}){
  return <>
  <input type="text" name="inputField" id="inputField" className={style["inputField"]} value={DisplayData} readOnly/>
  </>
  
}
export default DisplayField