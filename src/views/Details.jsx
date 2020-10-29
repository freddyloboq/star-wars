import React, { useContext } from "react"
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap"

const Details = () => {
    const { store, actions } = useContext(Context);
    console.log(store);

    return (
        <>
            <Row>
                <Col className="pt-3">
                    <h1 className="text-danger display-1">Diteils: {store.peopleID.name}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="w-100" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/07/star-wars-squadrons-embargo-22-julio-1700-2003439.jpg" alt="" />
                </Col>
                <Col>
                    <p className="pl-5 pb-5 w-75 h3">Gender: {store.peopleID.gender}</p>
                    <p className="pl-5 pb-5 w-75 h3">Hair color: {store.peopleID.hair_color}</p>
                    <p className="pl-5 pb-5 w-75 h3">Skin color: {store.peopleID.skin_color}</p>
                    <p className="pl-5 pb-5 w-75 h3">Eye color: {store.peopleID.eye_color}</p>
                    <p className="pl-5 pb-5 w-75 h3">Height: {store.peopleID.height}</p>
                    <p className="pl-5 pb-5 w-75 h3">Mass: {store.peopleID.mass}</p>
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

export default Details;