import React, { useState} from "react";

const Form = (props) => {

    // Updates the input data
    var[bodyData, setBodyData] = useState([]);
    var [tagsData, setTagsData] = useState([]);
    var [hasGottenProps, setHasGottonProps] = useState(false);

        // Tags text input. Value is the defualt value that the text will have
    const Tags = (props) => {
        return <input 
            className="tags-input" 
            type="text" 
            id={props._id}
            name="tags"
            defaultValue={props.value ? props.value : ""}
        />
    }
    const Input = (props) => {
        return <textarea 
            className="body-input" 
            id={props._id} 
            name="body" 
            cols="60" 
            rows="4"
            defaultValue={props.value ? props.value : ""}
            >
            
        </textarea>
    };
    
    function loopThroughTags (inputList) {
        let tagsValuesList = [];
        tagsValuesList.push ( inputList.map (input => {
            return( 
                <Tags
                    value={input}
                    key={tagsValuesList.length}
                    _id={tagsValuesList.length}
                />
            )
            }) 
        )
        setTagsData(tagsValuesList);
    }  

    (async function getPropsValue (){
        if(props.data && !hasGottenProps) {
            loopThroughTags(props.data.tags);

            setHasGottonProps(true)
        }
    })()
    
    const tagsButtonClick = event => {
        setTagsData(tagsData.concat(<Tags key={tagsData.length} _id={tagsData.length} />));
    };


  return (
    <div>
      <form 
        className="admin-create-form" 
        method="POST" 
        encType="multipart/form-data"
        action={ props.url ? props.url : "/"}
        >

        {/* <label htmlFor="thumbnail">Thumbnail:</label>
        <input 
        className="thumbnail-input" 
            type="file" 
            id="image" 
            name="image" 
            />
        <br/> */}

        <label htmlFor="title">title:</label>
        <input 
            className="title-input" 
            defaultValue={props.data ? props.data.title : ""} 
            type="text" 
            id="title" 
            name="title"/>
        <br/>

        <label htmlFor="summary">summary:</label>
        <input 
            className="summary-input" 
            defaultValue={props.data ? props.data.summary : ""} 
            type="text" 
            id="summary" 
            name="summary"/>
        <br/><br/>

        <label htmlFor="body">body:</label>
        <textarea 
            className="body-input" 
            id={props._id} 
            name="body" 
            cols="60" 
            rows="4"
            defaultValue={props.data? props.data.body : ""}
            >
            
        </textarea>

        <br/><br/>
        
        <label htmlFor="tags">tags:</label>
        <div className="tags-group"> 
        {tagsData}
            {/* { props.data ? tagsData : <Tags/>} */}
        </div>
        <button type="button" onClick={tagsButtonClick}>Add tags</button>
        <br/>

        <input className="submit-input" type="submit" value="Submit"></input>

        
      </form>
    </div>
  );
};

export default Form