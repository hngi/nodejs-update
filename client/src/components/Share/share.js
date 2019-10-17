import React from "react";

function share() {
  return (
    <div>
      <button
        style={({ padding: "20px" }, { margin: "20px" })}
        id="btn-email"
        className="btn btn-primary"
        onClick={() => {
          document.getElementsByClassName("form2")[0].classList.add("d-none");
          var form1 = document.getElementsByClassName("form1")[0];
          form1.classList.contains("d-none")
            ? form1.classList.remove("d-none")
            : form1.classList.add("d-none");
        }}
      >
        Upload by email
      </button>
      <div className="form1 d-none">
        <form action>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="Your email address"
              id="email"
            />
            <label htmlFor="Remail">Reciever Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="email address of Reciever"
              id="Remail"
            />
            <label htmlFor="email">Message</label>
            <textarea
              className="form-control"
              name
              id
              cols={10}
              rows={3}
              defaultValue={""}
            />
          </div>
        </form>
      </div>
      <button
        id="btn-link"
        className="btn btn-primary ml-5"
        onClick={() => {
          document.getElementsByClassName("form1")[0].classList.add("d-none");
          var form2 = document.getElementsByClassName("form2")[0];
          form2.classList.contains("d-none")
            ? form2.classList.remove("d-none")
            : form2.classList.add("d-none");
        }}
      >
        Upload by link
      </button>

      <div className="form2 d-none">
        <form action>
          <div className="form-group">
            <label htmlFor="email">Message</label>
            <textarea
              className="form-control"
              name
              id
              cols={10}
              rows={3}
              defaultValue={""}
            />
            <label htmlFor>Upload file</label>
            <input className="form-control-file" type="file" />
            <input
              type="submit"
              className="btn btn-primary float-right"
              defaultValue="Generate Link"
            />
            <button id="back" className="btn btn-primary float-left">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default share;
