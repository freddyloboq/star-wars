import React, { useContext } from "react"
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap"

const DetailsPlanets = () => {
    const { store, actions } = useContext(Context);
    console.log(store);

    return (
        <>
            <Row>
                <Col className="pt-3">
                    <h1 className="text-danger display-1">Details: {store.planetsID.name}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="w-100" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/07/star-wars-squadrons-embargo-22-julio-1700-2003439.jpg" alt="" />
                </Col>
                <Col>
                    <p className="pl-5 pb-5 w-75 h3">Rotation period: {store.planetsID.rotation_period}</p>
                    <p className="pl-5 pb-5 w-75 h3">Orbital period: {store.planetsID.orbital_period}</p>
                    <p className="pl-5 pb-5 w-75 h3">Diameter: {store.planetsID.diameter}</p>
                    <p className="pl-5 pb-5 w-75 h3">Climate: {store.planetsID.climate}</p>
                    <p className="pl-5 pb-5 w-75 h3">Gravity: {store.planetsID.gravity}</p>
                    <p className="pl-5 pb-5 w-75 h3">Terrain: {store.planetsID.terrain}</p>
                </Col>
            </Row>
            <Row>
                <Col className="pt-3">
                    <Link to="/" variant="primary" className="btn btn-primary">Home</Link>
                </Col>
            </Row>
        </>
    )
};

export default DetailsPlanets;