import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("retorna true para '[1, 2 ,1]'", () => {
        const ehDuplicado = checaItensDuplicados([1,2,1])

        expect(ehDuplicado).toEqual(true);
    });
    test("retorna true para ['a', 'a', 'b', 'c']", () => {
        const ehDuplicado = checaItensDuplicados(["a", "a", "b", "c"])

        expect(ehDuplicado).toEqual(true);
    });
    test("retorna true para [5, 5, 3, 6, 5, 6]", () => {
        const ehDuplicado = checaItensDuplicados([5, 5, 3, 6, 5, 6])

        expect(ehDuplicado).toEqual(true);
    });
    test("retorna true para []", () => {
        const ehDuplicado = checaItensDuplicados([])

        expect(ehDuplicado).toEqual(true);
    });
    test("retorna true para [1]", () => {
        const ehDuplicado = checaItensDuplicados([1])

        expect(ehDuplicado).toEqual(true);
    });
    test("retorna true para [1,2,3]", () => {
        const ehDuplicado = checaItensDuplicados([1,2,3])

        expect(ehDuplicado).toEqual(true);
    });
    test("retorna true para '['f', 'd', 'e', 'f']'", () => {
        const ehDuplicado = checaItensDuplicados(["f", "d", "e", "f"])

        expect(ehDuplicado).toEqual(true);
    });
});
