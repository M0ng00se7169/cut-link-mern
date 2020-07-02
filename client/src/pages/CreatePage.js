import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";

export const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");

  // Make POST request for cut the link
  const pressHandler = async () => {
    try {
      const data = await request(
        "/api/link/generate",
        "POST",
        { from: link },
        {
          Authorization: `Bearer ${auth.token}`,
        }
      );
      history.push(`/detail/${data.link._id}`);
    } catch (e) {}
  };

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  return (
    <div className="row">
      <div className="col s12" style={{ paddingTop: "2rem" }}>
        <div className="input-field">
          <input
            placeholder="Enter your link"
            id="link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <label htmlFor="link">Enter Your Link</label>
          <button className="btn btn-primary" onClick={pressHandler}>Cut The Link</button>
        </div>
      </div>
    </div>
  );
};
