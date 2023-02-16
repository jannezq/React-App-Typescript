import { useParams } from "react-router-dom";
import { IArticles } from "../interfaces/IArticles";
import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Card, Button } from "react-bootstrap";

const ArticleDetailComponent = () => {
  const params = useParams();
  const articleId = params.articleId;
  const [article, setArticle] = useState<IArticles | null>(null);

  const url = "https://api.spaceflightnewsapi.net/v3/articles/";
  const fetchSingleArticle = async () => {
    try {
      let response = await fetch(url + articleId);
      if (response.ok) {
        let data: IArticles = await response.json();
        console.log(data);
        setArticle(data);
      } else {
        console.log("ERROR!!!! :( ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container className=" h-100">
        {article ? (
          <>
            <div className="d-flex my-auto">
              <div>
                <Card.Img src={article.imageUrl}></Card.Img>
              </div>
              <Card>
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {article.newsSite}
                  </Card.Subtitle>
                  <Card.Text>{article.summary}</Card.Text>
                  <Card.Text>
                    Published at:{" "}
                    {new Date(article.publishedAt).toLocaleDateString("en-GB")}
                  </Card.Text>
                  <Button onClick={() => window.location.assign(article.url)}>
                    Read more...
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </>
        ) : (
          <Spinner variant="info" animation="border" />
        )}
      </Container>
    </>
  );
};

export default ArticleDetailComponent;
