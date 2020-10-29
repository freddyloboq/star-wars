import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { CardDeck, Card, Button } from "react-bootstrap"
import { FaHeart, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

const CardPlanet = () => {
    const { store, actions } = useContext(Context);
    console.log(store);
    return (
        <>
            < Button variant="outline-dark" className={"justify-content-end mr-sm-2 " + (store.planet.previous == null ? "disabled" : "")}
                onClick={() => actions.getPlanet(store.planet.previous)}><FaArrowLeft />
            </Button>
            {
                store.planet.results !== undefined ?
                    (
                        store.planet.results.map((item, index) => {
                            return (
                                <CardDeck className="m-4" key={index}>
                                    <Card style={{ width: '20rem' }}>
                                        <Card.Img variant="top"
                                            src="https://pm1.narvii.com/6361/c338000011dddc976bc1e960bf83c6a04402b720_hq.jpg" />
                                        <Card.Body>
                                            <Card.Title>Name: {item.name}</Card.Title>
                                            <Card.Text>Climate: {item.climate}</Card.Text>
                                            <Card.Text>Gravity: {item.gravity}</Card.Text>
                                            <Card.Text>Climate: {item.climate}</Card.Text>
                                            <Card.Text>Terrain: {item.terrain}</Card.Text>
                                            <Link to={'/Details-Planets/' + item.name} variant="primary" className="btn btn-primary" onClick={() => actions.getPlanetsID(item.url)}>Details</Link>
                                            <Button variant="outline-danger" className="justify-content-end ml-4" onClick={() => { actions.addFavorite(item.name) }}><FaHeart /></Button>
                                        </Card.Body>
                                    </Card>
                                </CardDeck>
                            )
                        })
                    )
                    :
                    (
                        <h1>Loading</h1>
                    )
            }
            < Button variant="outline-dark" className={"justify-content-end mr-sm-2 " + (store.planet.next == null ? "disabled" : "")}
                onClick={() => actions.getPlanet(store.planet.next)}><FaArrowRight />
            </Button>
        </>
    );
};

export default CardPlanet;