import { useRef } from "react";

const New = () => {
    const head = useRef();
    const body = useRef();

    const HandlePost = (e)=>{
        e.preventDefault();
        fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({
                head: head.current.value,
                body: body.current.value
            }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        }).then(res => res.json()).then(data => {
            console.log(data);
        })
    }

  return (
    <>
        <form action="/api/blog" method="POST">
            <input name="head" type="text" ref={head}/>
            <input name="body" type="text" ref={body}/>
            <button onClick={HandlePost}>POST</button>
        </form>
    </>
  )
}

export default New