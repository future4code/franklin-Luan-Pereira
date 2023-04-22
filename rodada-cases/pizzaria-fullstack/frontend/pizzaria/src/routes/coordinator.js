export function goToPizzaPage(navigate) {
    navigate("/api/pizzas");
}

export function goToOrdersPage(navigate) {
    navigate("/api/orders");
}

export function goToOrdersIdPage(navigate, id) {
    navigate(`/api/orders/${id}`);
}