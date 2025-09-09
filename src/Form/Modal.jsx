export default function Modal({ isOpen, onSetIsOpen, errorMessage }) {
  return (
    isOpen && (
      <div className="fixed top-0 left-0 min-h-screen min-w-screen flex justify-center items-center">
        <div className="w-130 bg-slate-50 flex flex-col space-y-5 py-8 px-10 rounded-md shadow-md focus:-outline-offset-8">
          <label>
            Enter your account's email address, and we'll send you a link to
            reset your password.
          </label>
          <input type="text" className="border-1 border-gray-300 rounded-md" />
          <div className="min-w-full flex justify-end space-x-2">
            <button
              className="px-2 py-1 rounded-md cursor-pointer"
              onClick={() => onSetIsOpen(!isOpen)}
            >
              Cancel
            </button>
            <button
              onClick={() => onSetIsOpen(!isOpen)}
              className="bg-black text-white border-1 px-3 py-2 rounded-md cursor-pointer"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    )
  );
}
