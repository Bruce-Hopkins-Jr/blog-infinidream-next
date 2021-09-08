import React from 'react'
import Layout from "../components/layout"
import axios from 'axios'

import BlogpostContext from '../components/context/BlogpostsContext'

function IndexPage (props) {
  // Maps through each blog posts. 
  function CreatePosts () {
    const context = React.useContext(BlogpostContext)
    if (context) return context.map (data => {
        return (
          <div className="blogpost-container" key={data._id}>
            <a href={"blog/"+data._id} className="blogpost-group"> 
              {/* <img alt="Thumbnail" src={`data:image/png;base64, ${data.thumbnailString}` }/>  */}
              <div className="blogpost-text-group">
                <h3>{data.title}</h3>
                <div className="blogpost-info">
                  {data.tags ? data.tags.map(tag => {
                    return <p className="blogposts-tags" key={tag}> {tag} </p>
                  }): <p> </p>}
                  <p className="blogposts-date">{data.FormattedDateOfPost}</p>
                </div>
                <p className="read-more"> Read more... </p>
              </div>
            </a>
          </div>
        )
    })
    return <h2> There was an error. Try refreshing the page</h2>
  }
  

  return (
      <BlogpostContext.Provider value={props.content ? props.content : null}>

        <Layout>
          <section className="posts-container">
            <div className="post-list">
                <CreatePosts/>          
            </div>
          </section>
        </Layout>
      </BlogpostContext.Provider>
      



  )
}

export async function getStaticProps() {
  let postData
  try {
    await axios.get('http://localhost:5000/api/posts/').then((res) => {
        postData = res;
    });
    const data =  {content:postData.data}
    return { props: data}
  } catch (error) {
      
    const data =  {content:false}
    return { props: data}
  }
}


export default IndexPage

