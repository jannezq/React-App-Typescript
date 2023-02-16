import { useState, useEffect } from "react";
import { IArticles } from "../interfaces/IArticles";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import ArticleComponent from "./ArticleComponent";

const FetchSpaceNews = () => {
  const url = "https://api.spaceflightnewsapi.net/v3/articles";
  const [articles, setArticles] = useState<IArticles[]>([]);

  //fetch api here
  const fetchArticles = async () => {
    try {
      let response = await fetch(url);
      if (response.ok) {
        let articlesData = await response.json();
        console.log(articlesData);
        setArticles(articlesData);
      } else {
        console.log("error has accoured!!!! :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <Container>
        <Jumbotron className="jumbo-area text-left">
          <h1>Space Flights! </h1>
          <p>Get the latest news on flights, aviation events and more....</p>
        </Jumbotron>
        <hr />
        <Row className="justify-content-center">
          <Col className="text-left mt-3">
            <h2>Latest News!</h2>
          </Col>
        </Row>
        <Row>
          {articles.map((a) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="text-dark mb-3"
              key={a.id}
            >
              <ArticleComponent article={a} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default FetchSpaceNews;
