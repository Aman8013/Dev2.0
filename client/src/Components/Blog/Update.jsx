import { useEffect, useRef } from "react";

let fetchData

const Update = () => {
    const head = useRef();
    const body = useRef();

    useEffect(() => {
        fetch('/api/blogs/' + window.location.pathname.split('/')[2]).then(res => res.json()).then(data => {
            fetchData = data;
            console.log(fetchData);
        });
    }, [])


    const HandleUpdate = (e) => {
        e.preventDefault();
        fetch('/api/blog/' + window.location.pathname.split('/')[2], {
            method: 'PATCH',
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
                        <div className="col-md-6">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" name="head" ref={head} defaultValue={fetchData.head} />
                        </div>

                        <div className="col-12">
                            <label htmlFor="body" className="form-label">Body</label>
                            <textarea className="form-control" rows="20" ref={body} defaultValue={fetchData.body}></textarea>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" onClick={HandleUpdate}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Update