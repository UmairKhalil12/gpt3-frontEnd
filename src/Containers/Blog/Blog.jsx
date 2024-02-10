import "./Blog.css"
import { Article } from "../../Components"
import { blog1, blog2 , blog3 , blog4 , blog5 } from "./index"

export default function Blog() {
  return (
    <div className="gpt3-blog section_padding" id="blog">
      <div className="gpt3-blog-heading">
        <h1 className="gradient-text">A lot is happening,
          We are blogging about it.</h1>
      </div>
      <div className="gpt3-blog-container">
        <div className="gpt3-blog-container-groupA">
          <Article imgUrl={blog1} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>

        <div className="gpt3-blog-container-groupB">
          <Article imgUrl={blog2} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgUrl={blog3} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgUrl={blog4} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgUrl={blog5} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
      </div>
    </div>
  )
}
