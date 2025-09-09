import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { FacebookIcon, GoogleIcon } from "./assets/Custom_icons";
import SelectModeDropdownList from "./SelectModeDropdownList";
import Modal from "./Modal";

export default function App() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
function LoginForm() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [usenameErrorMessage, setUsernameErrorMessage] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [light, setLight] = useState(true);

  const [showForgetPasswordModal, setShowForgetPasswordModal] = useState(false);

  let isValid = true;
  function handleSubmit() {
    if (!username || !/\S+@\S+\.\S+/.test(username)) {
      setUsernameError(true);
      setUsernameErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setUsernameError(false);
      setUsernameErrorMessage("");
      isValid = true;
    }
    if (!password) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
      isValid = true;
    }
  }

  return (
    <div
      className={`min-h-screen flex flex-col bg-gray-100 dark:bg-slate-700 ${
        !light && "dark"
      }`}
    >
      <SelectModeDropdownList light={light} onSetLight={setLight} />
      <Modal
        isOpen={showForgetPasswordModal}
        onSetIsOpen={setShowForgetPasswordModal}
      />

      <div className="flex justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col space-y-4 bg-white px-10 py-10 rounded-2xl w-110 dark:bg-slate-800 dark:text-white"
        >
          <header>
            <div className="flex space-x-1 space-y-6 font-semibold line-space tracking-tight h-14 leading-8">
              <img src={reactLogo} alt="logo" className="w-8 h-8" />
              <p className="items-center-self" style={{ color: "#00D8FE" }}>
                Demo
              </p>
            </div>
            <h1 className="text-3xl font-semibold">Sign in</h1>
          </header>
          <div className="flex flex-col space-y-1 space-x-2 ">
            <label className="w-24">Username</label>
            <input
              type="text"
              className="border-1 border-gray-300 bg-gray-50 rounded-xl flex-1 px-3 py-2 focus:outline-0 dark:text-slate-900"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="your@email.com"
            />
            {usernameError && (
              <p className="text-red-500 text-sm pl-3">{usenameErrorMessage}</p>
            )}
          </div>
          <div className="flex flex-col space-y-1 space-x-2">
            <label>Password</label>
            <input
              type="password"
              className="border-1 border-gray-300 bg-gray-50 rounded-xl px-3 py-2 focus:outline-0 dark:text-slate-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
            />
            {passwordError && (
              <p className="text-red-500 text-sm pl-3">
                {passwordErrorMessage}
              </p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="min-w-3.5 min-h-3.5" />
            <label className="text-sm tracking-wide">Remember me</label>
          </div>
          <div className="flex flex-col justify-center space-y-3">
            <button
              type="submit"
              className="bg-blue-400 text-white w-full rounded-xl py-2 hover:opacity-80 transition delay-50 duration-300 ease-in-out cursor-pointer dark:bg-white dark:text-slate-900"
              onClick={handleSubmit}
            >
              Sign in
            </button>
            <button
              className="underline underline-offset-4 decoration-gray-300 cursor-pointer text-sm hover:opacity-60"
              onClick={() => setShowForgetPasswordModal(true)}
            >
              Forgot your password?
            </button>
          </div>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-600 text-sm dark:text-white">
              or
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex flex-col space-y-3">
            <button className="w-full cursor-pointer border-1 border-gray-200 bg-slate-50 rounded-sm py-2 flex items-center justify-center space-x-2 hover:bg-slate-200 ">
              <FacebookIcon />
              <span className="dark:text-slate-900">Sign in with Facebook</span>
            </button>
            <button className="w-full cursor-pointer border-1  border-gray-200 bg-slate-50 rounded-sm py-2 flex items-center justify-center space-x-2 hover:bg-slate-200">
              <GoogleIcon />
              <span className="dark:text-slate-900">Sign in with Google</span>
            </button>
            <div className="text-xs text-center">
              Don't have an account?{" "}
              <button className="underline underline-offset-3 cursor-pointer">
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
