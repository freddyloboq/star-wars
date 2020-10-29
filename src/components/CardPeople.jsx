import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { CardDeck, Card, Button } from "react-bootstrap"
import { FaHeart, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

const CardPeople = () => {
    const { store, actions } = useContext(Context);
    console.log(store);
    return (
        <>
            < Button variant="outline-dark" className={"justify-content-end mr-sm-2 " + (store.people.previous == null ? "disabled" : "")}
                onClick={() => actions.getPeople(store.people.previous)}><FaArrowLeft />
            </Button>
            {
                store.people.results !== undefined ?
                    (
                        store.people.results.map((item, index) => {
                            return (
                                <CardDeck className="m-4" key={index}>
                                    <Card style={{ width: '20rem' }}>
                                        <Card.Img variant="top"
                                            src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/pyr/55673ed52a98bb41703ed903/dia-star-wars.jpg" />
                                        <Card.Body>
                                            <Card.Title>Name: {item.name}</Card.Title>
                                            <Card.Text>Gener: {item.gender}</Card.Text>
                                            <Card.Text>Skin color: {item.skin_color}</Card.Text>
                                            <Card.Text>Eye color: {item.eye_color}</Card.Text>
                                            <Card.Text>birth year: {item.birth_year}</Card.Text>
                                            <Link to={'/Details/' + item.name} variant="primary" className="btn btn-primary justify-content-start" onClick={() => actions.getPeopleID(item.url)}>Details</Link>
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
            < Button variant="outline-dark" className={"justify-content-end mr-sm-2 " + (store.people.next == null ? "disabled" : "")}
                onClick={() => actions.getPeople(store.people.next)}><FaArrowRight />
            </Button>
        </>
    );
};

export default CardPeople;