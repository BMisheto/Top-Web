import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Message from "../../../components/message/Message";

function CreateEvent() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [venue, setVenue] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);
  const [isLogged, setLogged] = useState(false);

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);


  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      setLogged(false);
    } else {
      setLogged(true);
    }
  }, [userInfo]);

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("venue", venue);
    formData.append("location", location);
    formData.append("start_date", startDate);
    formData.append("end_date", endDate);
    formData.append("description", description);
    formData.append("event_cover", image);
    formData.append("user", userInfo.id);

    fetch("http://127.0.0.1:8000/api/events/create/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        
        setSuccess(true);
        setMessage("Event added");
        navigate('/events')

      })
      .catch((error) => {
        
        
          setError(true);
          setMessage("error");

        
      });
  };
  return (
    <div className="">
      <main className="min-h-[500px] ">
        <div className="subpixel-antialiased  bg-hero-cover bg-no-repeat bg-bottom bg-cover  min-h-screen flex flex-row justify-around items-center font-sans    mx-auto lg:justify-around lg:align-center lg:text-centen  p-3 lg:p-0 mt-[60px]">
          {/* central div */}

          <div className="inset-0 mx-auto">
            {/* login */}
            <div>
              {/* description */}
              <div className="flex flex-col justify-center content-center items-center text-center space-y-3 p-5">
                <h1 className="text-[18px] font-bold">Create Event</h1>
              </div>

              {/* form */}

              <div>
                <div>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col lg:flex-row justify-center  content-center items-start space-y-4 w-full lg:w-auto  rounded-lg gap-2 md:gap-3"
                  >
                    <div className="flex flex-col justify-start content-center items-center gap-2 md:gap-3 p-2 md:p-3">
                      <img
                        src={displayImage}
                        className="max-w-full md:max-w-[500px] lg:max-w-[400px] lg:min-h-[500px] h-auto object-center object-cover rounded-md drop-shadow-lg"
                      />

                      <input
                        class="block w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 cursor-pointer focus:outline-none "
                        aria-describedby="file_input_help"
                        id="file_input"
                        type="file"
                        onChange={(e) => {
                          setImage(e.target.files[0]);
                          const file = e.target.files[0];
                          const reader = new FileReader();
                          reader.readAsDataURL(file);
                          reader.onload = (event) => {
                            const result = event.target.result;
                            setDisplayImage(result);
                          };
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3 items-center content-center justify-center p-2 md:p-3 w-full">
                      <input
                        className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                       placeholder:text-[13px]
                       placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px]"
                        required
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                      />

                      <input
                        className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                       placeholder:text-[13px]
                       placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px]"
                        required
                        onChange={(e) => setVenue(e.target.value)}
                        placeholder="Venue"
                      />

                      <input
                        className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                      placeholder:text-[13px]
                      placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px]"
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                      />

                      <input
                        className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                       placeholder:text-[13px]
                       placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px]"
                        type="text"
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                        placeholder="Start Date"
                      />
                      <input
                        className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                       placeholder:text-[13px]
                       placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px]"
                        type="text"
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                        placeholder="End Date"
                      />

                      <textarea
                        className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                       placeholder:text-[13px]
                       placeholder:pl-4 min-w-[300px] md:min-w-[400px] min-h-[150px] text-[15px]"
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        placeholder="Description"
                      ></textarea>


                      {error && (
                        <Message type="error">{message}</Message>
                      )}
                      {success && (
                        <Message type="success">{message}</Message>
                      )}

                      <button
                        type="submit"
                        className="p-2  bg-none outline-none rounded-xl bg-blue-600 text-white  hover:bg-blue-700  min-w-[300px] md:min-w-[400px] h-[60px] text-[13px] md:text-[16px] drop-shadow-lg shadow-blue-500/50  m-1"
                      >
                        Create Event
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Register */}
              <div className="flex flex-col justify-center content-center items-center text-center space-y-3 p-5"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreateEvent;
