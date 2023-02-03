import "./Blog.scss";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { blogData } from "../../utils/UserData";

function Blog() {
  return (
    <div className="blog section animate fadeUp medium">
      <div className="container">
        <SectionTitle title="blog" />
        <div className="blogWrapper">
          {blogData.map((data, index) => (
            <div
              className={index % 2 === 0 ? "blogItem" : "blogItem bannerRight"}
              key={index}
            >
              <figure className="blogBanner">
                <img className="img" src={data.img.src} alt={data.title} />
                <span className="caption">
                  <span className="captionItem"><i className="fa-solid fa-user"></i>{data.img.caption.author}</span>
                  <span className="captionItem"><i className="fa-regular fa-clock"></i>{data.img.caption.time}</span>
                  <span className="captionItem"><i className="fa-solid fa-comments"></i>{data.img.caption.cmt}</span>
                </span>
              </figure>
              <div className="blogInfo">
                <div className="breadcrumb">
                  {data.breadcrumb.map((_data, index) => (
                    <span key={index}>
                      <a className={`breadcrumbItem${index === data.breadcrumb.length - 1 ? " last" : ""}`} href="/" key={index}>
                        {_data.name}
                      </a>
                      {index < data.breadcrumb.length - 1 && (
                        <span className="slash">/</span>
                      )}
                    </span> 
                  ))}
                </div>
                <div className="title">{data.title}</div>
                <div className="content">{data.content}</div>
                <a className="readmore" href="/">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
