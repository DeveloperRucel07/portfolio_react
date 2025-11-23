

const ContactForm = () => {
  return (
    <form className="w-full flex flex-col p-2">
      <div className="input-forms flex flex-col md:flex-row items-center justify-center w-full gap-10">
        <div className="flex flex-col items-center justify-center gap-4 w-full md:w-[50%]">
          <label htmlFor="name" className=" w-full h-12 relative">
            <input type="text" name="name" className="border border-secondary w-full h-full pl-4" />
          </label>

          <label htmlFor="email" className="w-full h-12 relative">
            <input type="email" name="email" className="border border-secondary w-full h-full pl-4"/>
          </label>
        </div>
        <textarea className="border border-secondary w-full md:w-[50%] h-30 resize-none relative" name="message" id="message">
        </textarea>
      </div>
      <div className="privacy flex flex-col justify-between w-full pt-4 gap-6">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row items-center justify-start w-full">
            <input type="checkbox" />
            <p>I've read <a href="">privacy policy</a> and agree to the processing of my data as outlined.</p>
          </div>
          <p className="text-sm text-red-500">Please accept the privacy policy</p>
        </div>
        <div className="flex flex-row items-end justify-end w-full">
          <button className="flex items-center justify-center border-2 border-gray-600 text-gray-600 w-32 h-12 " disabled>
            Send
          </button>
        </div>
      </div>
        
    </form>
  )
}

export default ContactForm