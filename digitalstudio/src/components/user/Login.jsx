import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { PacmanLoader } from "react-spinners"

function Login() {

    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [load, setload] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const nav = useNavigate()

    const handleForm = (e) => {
        e.preventDefault()

        setload(true)

        console.log("Email:", email)
        console.log("Password:", Password)

        // Temporary loading for testing
        setTimeout(() => {
            setload(false)
        }, 2000)
    }

    return (
        <>

            {/* Page Header */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">
                    Login
                </h1>

                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="/">Home</a>
                    </li>

                    <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                    </li>

                    <li className="breadcrumb-item active text-white">
                        Login
                    </li>
                </ol>
            </div>


            {/* Loading */}
            {
                load ?

                    <div
                        style={{ height: "70vh" }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <PacmanLoader
                            color="#77f370"
                            size={25}
                        />
                    </div>

                    :

                    /* Login Section */
                    <div className="container py-5">

                        <div className="row justify-content-center">

                            <div className="col-md-6 col-lg-5">

                                <div className="p-4 p-md-5 shadow-sm border rounded bg-white">

                                    {/* Heading */}
                                    <div className="text-center mb-4">

                                        <h2 className="mb-2">
                                            Welcome Back
                                        </h2>

                                        <p className="text-muted">
                                            Login to access your account
                                        </p>

                                    </div>


                                    {/* Form */}
                                    <form onSubmit={handleForm}>

                                        {/* Email */}
                                        <div className="mb-4">

                                            <label
                                                htmlFor="email"
                                                className="form-label"
                                            >
                                                Email Address
                                            </label>

                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control py-3"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                required
                                            />

                                        </div>


                                        {/* Password */}
                                        <div className="mb-3">

                                            <label
                                                htmlFor="password"
                                                className="form-label"
                                            >
                                                Password
                                            </label>

                                            <div className="position-relative">

                                                <input
                                                    type={
                                                        showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    id="password"
                                                    className="form-control py-3 pe-5"
                                                    placeholder="Enter your password"
                                                    value={Password}
                                                    onChange={(e) =>
                                                        setPassword(e.target.value)
                                                    }
                                                    required
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setShowPassword(!showPassword)
                                                    }
                                                    className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent me-3"
                                                >
                                                    <i
                                                        className={
                                                            showPassword
                                                                ? "fa fa-eye-slash"
                                                                : "fa fa-eye"
                                                        }
                                                    ></i>
                                                </button>

                                            </div>

                                        </div>


                                        {/* Remember + Forgot */}
                                        <div className="d-flex justify-content-between align-items-center mb-4">

                                            <div className="form-check">

                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="remember"
                                                />

                                                <label
                                                    className="form-check-label"
                                                    htmlFor="remember"
                                                >
                                                    Remember me
                                                </label>

                                            </div>

                                            <a
                                                href="#"
                                                className="text-decoration-none"
                                            >
                                                Forgot Password?
                                            </a>

                                        </div>


                                        {/* Login Button */}
                                        <button
                                            type="submit"
                                            className="btn w-100 py-3 text-white"
                                            style={{
                                                backgroundColor: "#77f370"
                                            }}
                                        >
                                            Sign In
                                        </button>

                                    </form>


                                    {/* Register */}
                                    <div className="text-center mt-4">

                                        <p className="text-muted mb-0">
                                            Don't have an account?{" "}

                                            <span
                                                onClick={() => nav("/register")}
                                                style={{
                                                    cursor: "pointer",
                                                    color: "#77f370",
                                                    fontWeight: "500"
                                                }}
                                            >
                                                Create Account
                                            </span>

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
            }

        </>
    )
}

export default Login