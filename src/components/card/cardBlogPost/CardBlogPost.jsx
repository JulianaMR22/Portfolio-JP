import Card from "../Card";
import "./CardBlogPost.css";

function CardBlogPost() {
  return (
    <Card className="blog__post">
      <div></div>
      <div>
        <p className="text__credential paragraph__common paragraph_color">
          read me
        </p>
        <p className="text__credential paragraph__subtitle__common">
          blog posts
        </p>
      </div>
    </Card>
  );
}

export default CardBlogPost;
