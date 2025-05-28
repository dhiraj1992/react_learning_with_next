export default function Page() {

async function submitForm(event) {
    "use server";
    const formfields = {
        email: event.get("email"),
        name: event.get("name"),
        message: event.get("message"),
    };  
    console.log("Form submitted:", formfields);
    console.log("Todo: Implement form submission logic here, e.g., send to an API or email service.");
    return formfields;
  }




    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-xl">
          <main className="w-full">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">
              If you have any questions or need assistance, please reach out to us at:
            </p>
            <ul className="mb-4">
              <li>
                Email:{" "}
                <a className="text-blue-600 underline" href="mailto:info@gmail.com">
                  info@gmail.com
                </a>
              </li>
            </ul>
            <p className="mb-6">We look forward to hearing from you!</p>
  
            <form className="space-y-4" action={submitForm}>  
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 font-medium">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-medium">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div className="flex flex-col">
                <label htmlFor="message" className="mb-1 font-medium">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
  
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </main>
        </div>
      </div>
    );
  }
  