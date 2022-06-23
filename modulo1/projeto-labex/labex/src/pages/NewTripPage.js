import React from "react";

function NewTripPage() {
  return (
    <div>
        <h1>Novo Destino Labex</h1>
        <form>
            <div className="input">
                <p>Destino</p>
                <input/>
            </div>
            <div className="input">
                <p>Data</p>
                <input/>
            </div>
            <div className="input">
                <p>Ida</p>
                <input/>
            </div>
            <div className="input">
                <p>Volta</p>
                <input/>
            </div>
            <button>Criar Viagem</button>
        </form>
    </div>
  );
}

export default NewTripPage;