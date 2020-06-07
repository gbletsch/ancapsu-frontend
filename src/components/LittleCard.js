import React from "react";

import { Link } from "react-router-dom";

import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardHeader,
  CardSubtitle,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

export default function LittleCard(props) {
  const {
    baseUrl,
    categories,
    extra,
    id,
    key,
    link,
    mainCategory,
    photo,
    reference,
    startingText,
    title,
  } = props;

  return (
    <Card>
      <CardImg src={photo} alt="image" />
      <Badge
        className="card-badge"
        color="warning"
        style={{
          position: "absolut",
          top: "4px",
          left: "4px",
        }}
      >
        {mainCategory.Category}
      </Badge>
      <CardHeader>
        {categories.map((item) => {
          return (
            <Link
              to={{
                pathname: `${baseUrl}/${item.Label}`,
                state: {
                  nameCat: item.Category,
                },
              }}
            >
              <Badge className="badge-dark">{item.Category}</Badge>
            </Link>
          );
        })}
      </CardHeader>
      <CardBody>
        <CardTitle tag="h6">
          <Link
            className="styled-a"
            to={{
              pathname: `${baseUrl}/${id}`,
              state: {
                photo: photo,
              },
            }}
          >
            {title}
          </Link>
        </CardTitle>
        <CardSubtitle>{reference}</CardSubtitle>
        <Link
          className="styled-a"
          to={{
            pathname: link,
            state: {
              id: key,
            },
          }}
        />
        <CardText className="mt-3">
          <small>{startingText}</small>
        </CardText>
      </CardBody>
      <CardFooter>Extras - vou escrever - goste - fake...</CardFooter>
    </Card>
  );
}
