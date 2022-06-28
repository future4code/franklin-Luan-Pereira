export const goToLoginPage = (navigate) => {
  // funcao que utiliza o navigate para ir para outra pagina
  navigate("/login"); // podemos chamar direto com navigate("login/")
};

export const goToOurTripPage = (navigate) => {
  navigate("/ourtrip");
};

export const goToSignUpPage = (navigate) => {
  navigate("/signup");
};
