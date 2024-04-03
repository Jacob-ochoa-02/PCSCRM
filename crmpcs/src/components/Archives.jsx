import '../styles/Archives.css'


export default function Archives() {
    return (
        <div className='addPart'>
            <h1>ARCHIVAR CLIENTES</h1>
            <hr />
            <div className='formOf'>
                <div id='searchContA'>
                <div className='inputContainer One'>
                    <label htmlFor="" className='labelForm'>ID Cliente: </label>
                    <input className='formInputs' type="text" placeholder="Ingresa el ID del cliente"/>
                </div>
                    <div className='buttonBox'>
                        <button>Buscar</button>
                        <img src="../styles/images/searchIcon.png" alt=''/>
                    </div>
                </div>
                <div className='inputContainerA'>
                    <label htmlFor="" className='labelForm'>Nombre Cliente</label>
                    <p></p>
                    <label htmlFor="" className='labelForm'>Nombre Cliente</label>
                    <p></p>
                </div>
            </div>
        </div>
    )
}