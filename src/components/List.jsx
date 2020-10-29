import React from "react";
import { Container } from "react-bootstrap"
import CardPeople from "./CardPeople";
import CardPlanet from "./CardPlanet"

const List = () => {
    return (
        <>
            <Container fluid>
                <div className="mt-5">
                    <h2 className="text-danger display-1">Character</h2>
                    <div className="row">
                        <div className="row flex-row flex-nowrap overflow-auto">
                            <CardPeople />
                        </div>
                    </div>
                </div>
                <div className="mt-5 mb-5">
                    <h2 className="text-danger display-1">Planets</h2>
                    <div className="row">
                        <div className="row flex-row flex-nowrap overflow-auto">
                            <CardPlanet />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
};

export default List;