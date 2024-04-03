import '../styles/updates.css'


export default function Update() {
    return (
        <div className='addPart'>
            <h1>EDITAR CLIENTES</h1>
            <hr />
            <div className='formOf'>
                <div id='searchCont'>
                <div className='inputContainer One'>
                    <label htmlFor="" className='labelForm'>ID Cliente: </label>
                    <input className='formInputs' type="text" placeholder="Ingresa el ID del cliente"/>
                </div>
                    <div className='buttonBox'>
                        <button>Buscar</button>
                        <img src="../images/searchIcon.png" alt=''/>
                    </div>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="" className='labelForm'>Nombre Cliente</label>
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
                <button type="submit" id='regBtn'>Confirmar</button>
        </div>
    )
}