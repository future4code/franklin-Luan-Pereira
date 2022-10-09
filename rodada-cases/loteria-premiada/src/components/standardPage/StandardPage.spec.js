import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StandardPage from "./StandardPage";

describe("StandardPage",() => {
    const renderStandardPage = () => {
        render(
        <BrowserRouter>
            <Routes>
                <Route index element={<StandardPage loteryConcourseId="2359" loteryId="0" backgroundColor="black" loteryConcourseDrawnNumbers={["31","32","39","42","43","51"]} loteryConcourseDate="2022-10-08T16:36:20.981Z" loteryName="lotomania"/>} />
            </Routes>
        </BrowserRouter>
)}
    it("it should render StandardPage component when payload came with name: 'mega-sena' ", () => {
        renderStandardPage()
        const megaSenaComponent = screen.getByText("lotomania")
        expect(megaSenaComponent).toBeInTheDocument()
    })
})

describe("StandardPage",() => {
    const renderStandardPage = () => {
        render(
        <BrowserRouter>
            <Routes>
                <Route index element={<StandardPage loteryConcourseId="5534" loteryId="1" backgroundColor="purple" loteryConcourseDrawnNumbers={["17","32","41","58","69"]} loteryConcourseDate="2022-10-08T16:36:20.981Z" loteryName="quina"/>} />
            </Routes>
        </BrowserRouter>
)}
    it("it should render StandardPage component when payload came with name: 'quina' ", () => {
        renderStandardPage()
        const megaSenaComponent = screen.getByText("quina")
        expect(megaSenaComponent).toBeInTheDocument()
    })
})

describe("StandardPage",() => {
    const renderStandardPage = () => {
        render(
        <BrowserRouter>
            <Routes>
                <Route index element={<StandardPage loteryConcourseId="2200" loteryId="2" backgroundColor="pink" loteryConcourseDrawnNumbers={["01","02","04","06","08","09","10","11","13","14","16","17","19","23","25"]} loteryConcourseDate="2022-10-08T16:36:20.981Z" loteryName="lotofácil"/>} />
            </Routes>
        </BrowserRouter>
)}
    it("it should render StandardPage component when payload came with name: 'lotofácil' ", () => {
        renderStandardPage()
        const megaSenaComponent = screen.getByText("lotofácil")
        expect(megaSenaComponent).toBeInTheDocument()
    })
})

describe("StandardPage",() => {
    const renderStandardPage = () => {
        render(
        <BrowserRouter>
            <Routes>
                <Route index element={<StandardPage loteryConcourseId="2167" loteryId="3" backgroundColor="orange" loteryConcourseDrawnNumbers={["02","07","18","26","27","37","38","39","43","47","51","54","57","61","67","71","77","82","88","99"]} loteryConcourseDate="2022-10-08T16:36:20.981Z" loteryName="lotomania"/>} />
            </Routes>
        </BrowserRouter>
)}
    it("it should render StandardPage component when payload came with name: 'lotomania' ", () => {
        renderStandardPage()
        const megaSenaComponent = screen.getByText("lotomania")
        expect(megaSenaComponent).toBeInTheDocument()
    })
})

describe("StandardPage",() => {
    const renderStandardPage = () => {
        render(
        <BrowserRouter>
            <Routes>
                <Route index element={<StandardPage loteryConcourseId="1622" loteryId="4" backgroundColor="green" loteryConcourseDrawnNumbers={["15","25","33","38","48","63","74"]} loteryConcourseDate="2022-10-08T16:36:20.981Z" loteryName="timemania"/>} />
            </Routes>
        </BrowserRouter>
)}
    it("it should render StandardPage component when payload came with name: 'timemania' ", () => {
        renderStandardPage()
        const megaSenaComponent = screen.getByText("timemania")
        expect(megaSenaComponent).toBeInTheDocument()
    })
})

describe("StandardPage",() => {
    const renderStandardPage = () => {
        render(
        <BrowserRouter>
            <Routes>
                <Route index element={<StandardPage loteryConcourseId="440" loteryId="5" backgroundColor="brown" loteryConcourseDrawnNumbers={["02","08","13","14","17","21","24"]} loteryConcourseDate="2022-10-08T16:36:20.981Z" loteryName="dia de sorte"/>} />
            </Routes>
        </BrowserRouter>
)}
    it("it should render StandardPage component when payload came with name: 'dia de sorte' ", () => {
        renderStandardPage()
        const megaSenaComponent = screen.getByText("dia de sorte")
        expect(megaSenaComponent).toBeInTheDocument()
    })
})