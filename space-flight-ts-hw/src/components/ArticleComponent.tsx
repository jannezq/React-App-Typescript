import { Card, Button } from "react-bootstrap";
import { IArticles } from "../interfaces/IArticles";
import { useNavigate } from "react-router-dom";

interface ArticlesProps {
  article: IArticles;
}

const ArticleComponent = (props: ArticlesProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Card className="card-area d-flex justify-content-between">
        <Card.Img
          variant="top"
          className="img-fluid"
          src={props.article.imageUrl}
        />
        <Card.Body>
          <Card.Title>{props.article.title}</Card.Title>

          <Button
            variant="info"
            onClick={() => navigate("/article/" + props.article.id)}
          >
            Read more...
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ArticleComponent;
