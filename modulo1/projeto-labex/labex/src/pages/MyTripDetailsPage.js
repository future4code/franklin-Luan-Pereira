import React from "react";

function MyTripDetailsPage() {
  return (
    <div>
      <h1>Destino</h1>
      <form>
        <div className="input">
          <p>Ida</p>
          <input type="Date" />
        </div>
        <div className="input">
          <p>Volta</p>
          <input type="Date" />
        </div>
      </form>

      <div className="Trip Detail">###DETALHES</div>
      <button>Apagar Viagem</button>
    </div>
  );
}

export default MyTripDetailsPage;
