import '../styles/addStyles.css'

export default function Add() {
    return (
        <div className='addPart'>
            <h1>REGISTRAR CLIENTES</h1>
            <hr />
            <div className='formOf'>
                <div className='inputContainer'>
                    <label htmlFor="" className='labelForm'>ID Cliente: </label>
                    <input className='formInputs' type="text" placeholder="Ingresa el ID del cliente"/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="" className='labelForm'>Nombre Cliente: </label>
                    <input className='formInputs' type="text" placeholder="Ingresa el nombre del cliente"/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="" className='labelForm'>Apellido Cliente: </label>
                    <input className='formInputs' type="text" placeholder="Ingresa el apellido del cliente"/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="" className='labelForm'>Teléfono Cliente: </label>
                    <input className='formInputs' type="text" placeholder="Ingresa el teléfono del cliente"/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="" className='labelForm'>Dirección Cliente: </label>
                    <input className='formInputs' type="text" placeholder="Ingresa la dirección del cliente"/>
                </div>
            </div>
                <button type="submit" id='regBtn'>Registrar</button>
        </div>
    )
}