import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { PacmanLoader } from "react-spinners"

function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [Password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [load, setload] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const nav = useNavigate()


    const handleForm = (e) => {
        e.preventDefault()

        if (Password !== confirmPassword) {
            alert("Passwords do not match")
            return
        }

        setload(true)
        https://kizaapi.ksesystem.com/api/user/add

        console.log("Name:", name)
        console.log("Email:", email)
        console.log("Phone:", phone)
        console.log("Password:", Password)

      
            setload(false)

            nav("/login")

    }


    return (
        <>

            <div className="container-fluid page-header py-5">

                <h1 className="text-center text-white display-6">
                    Register
                </h1>

                <ol className="breadcrumb justify-content-center mb-0">

                    <li className="breadcrumb-item">
                        <a href="/">
                            Home
                        </a>
                    </li>

                    <li className="breadcrumb-item">
                        <a href="#">
                            Pages
                        </a>
                    </li>

                    <li className="breadcrumb-item active text-white">
                        Register
                    </li>

                </ol>

            </div>



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

                    <div className="container py-5">

                        <div className="row justify-content-center">

                            <div className="col-md-6 col-lg-5">

                                <div className="p-4 p-md-5 shadow-sm border rounded bg-white">


                                   
                                    <div className="text-center mb-4">

                                        <h2 className="mb-2">
                                            Create Account
                                        </h2>

                                        <p className="text-muted">
                                            Register to access more information
                                        </p>

                                    </div>


                                    {/* Form */}
                                    <form onSubmit={handleForm}>


                                        {/* Name */}
                                        <div className="mb-4">

                                            <label
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Full Name
                                            </label>

                                            <input
                                                type="text"
                                                id="name"
                                                className="form-control py-3"
                                                placeholder="Enter your full name"
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                required
                                            />

                                        </div>


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


                                        {/* Phone */}
                                        <div className="mb-4">

                                            <label
                                                htmlFor="phone"
                                                className="form-label"
                                            >
                                                Phone Number
                                            </label>

                                            <input
                                                type="tel"
                                                id="phone"
                                                className="form-control py-3"
                                                placeholder="Enter your phone number"
                                                value={phone}
                                                onChange={(e) =>
                                                    setPhone(e.target.value)
                                                }
                                                required
                                            />

                                        </div>


                                        {/* Password */}
                                        <div className="mb-4">

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


                                        {/* Confirm Password */}
                                        <div className="mb-4">

                                            <label
                                                htmlFor="confirmPassword"
                                                className="form-label"
                                            >
                                                Confirm Password
                                            </label>

                                            <div className="position-relative">

                                                <input
                                                    type={
                                                        showConfirmPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    id="confirmPassword"
                                                    className="form-control py-3 pe-5"
                                                    placeholder="Confirm your password"
                                                    value={confirmPassword}
                                                    onChange={(e) =>
                                                        setConfirmPassword(e.target.value)
                                                    }
                                                    required
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setShowConfirmPassword(
                                                            !showConfirmPassword
                                                        )
                                                    }
                                                    className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent me-3"
                                                >

                                                    <i
                                                        className={
                                                            showConfirmPassword
                                                                ? "fa fa-eye-slash"
                                                                : "fa fa-eye"
                                                        }
                                                    ></i>

                                                </button>

                                            </div>

                                        </div>


                                        {/* Terms & Conditions */}
                                        <div className="form-check mb-4">

                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="terms"
                                                required
                                            />

                                            <label
                                                className="form-check-label"
                                                htmlFor="terms"
                                            >
                                                I agree to the Terms & Conditions
                                            </label>

                                        </div>


                                        {/* Register Button */}
                                        <button
                                            type="submit"
                                            className="btn w-100 py-3 text-white"
                                            style={{
                                                backgroundColor: "#77f370"
                                            }}
                                        >
                                            Create Account
                                        </button>

                                    </form>


                                    {/* Login */}
                                    <div className="text-center mt-4">

                                        <p className="text-muted mb-0">

                                            Already have an account?{" "}

                                            <span
                                                onClick={() => nav("/login")}
                                                style={{
                                                    cursor: "pointer",
                                                    color: "#77f370",
                                                    fontWeight: "500"
                                                }}
                                            >
                                                Login
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

export default Register