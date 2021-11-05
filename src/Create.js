import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {title, body, author};

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog)
    }).then(() => {
        console.log("new blog added")
        setIsPending(false);

        // history.go(-1);
        history.push('/')
    })
    }

    

    return ( 
        <div className="create">
            <h1>Create a new blog.</h1>

            <form onSubmit={handleSubmit}>
                <label> Blog title:</label>
                <input 
                    type="text" 
                    required
                    value = {title}
                    onChange ={(e) => { setTitle(e.target.value)}}
                />

                <label> Blog body:</label>
                <textarea
                    required
                    value= {body}
                    onChange ={(e) => { setBody(e.target.value)}}
                ></textarea>

                <label> Blog author:</label>
                <select
                    value={author}
                    onChange ={(e) => { setAuthor(e.target.value)}}
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                
                { !isPending && <button>Add Blog.</button>}
                { isPending && <button disabled>Adding Blog...</button>}
            </form>

            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
     );
}
 
export default Create;