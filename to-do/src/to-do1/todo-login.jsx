import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";

export function ToDologin() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Load users from json-server
  function loadUsers() {
    axios
      .get("http://localhost:3000/users")
      .then((response) => setUsers(response.data))
      .catch(() => alert("Server not running"));
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const formik = useFormik({
    initialValues: {
      user_id: "",
      password: "",
    },

    onSubmit: (formData) => {
      const userDetails = users.find(
        (item) => item.user_id.toString() === formData.user_id
      );

      if (!userDetails) {
        alert("User not found");
        return;
      }

      if (userDetails.password === formData.password) {
        // save login user (optional but useful)
        localStorage.setItem("login_user", formData.user_id);

        navigate("/dashboard");
      } else {
        alert("Invalid password");
      }
    },
  });

  return (
    <div className="container-fluid">
      <form className="p-4" onSubmit={formik.handleSubmit}>
        <h4 className="bi bi-person-fill"></h4>

        <dl>
          <dt>User Id</dt>
          <dd>
            <input
              type="text"
              name="user_id"
              className="form-control"
              value={formik.values.user_id}
              onChange={formik.handleChange}
              required
            />
          </dd>

          <dt>Password</dt>
          <dd>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formik.values.password}
              onChange={formik.handleChange}
              required
            />
          </dd>
        </dl>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        <div className="mt-4">
          <Link to="/register">New User register</Link>
        </div>
      </form>
    </div>
  );
}
