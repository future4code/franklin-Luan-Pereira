export const goToLoginPage = (navigate) => {
  // funcao que utiliza o navigate para ir para outra pagina
  navigate("/login"); // podemos chamar direto com navigate("/login")  
};

export const goToApplicationFormPage = (navigate) => {
  navigate("/trips/application");
};

export const goToAdminHomePage = (navigate) => {
  navigate("/admin/list");
};

export const goToTripDetailsPage = (navigate) => {
  navigate("/admin/trips/:id");
};

export const goToCreateTripPage = (navigate) => {
  navigate("/admin/trips/create");
};

export const goToListTripsPage= (navigate) => {
  navigate("/trips/list");
};

