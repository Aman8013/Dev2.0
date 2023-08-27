import { useRef } from "react";

const New = () => {
    const head = useRef();
    const body = useRef();

    const HandlePost = (e) => {
        e.preventDefault();
        fetch('/api/blog', {
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
            <div className="container mt-4 d-flex justify-content-center">
                <div className="card p-3" style={{ width: "50rem" }}>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" name="head" ref={head} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="body" className="form-label">Body</label>
                            <textarea className="form-control" rows="20" ref={body}></textarea>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" onClick={HandlePost}>POST</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default New