import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { listDonationDetails } from "../../features/actions/donationsActions";
import { motion } from "framer-motion";
import { REACT_API_URL } from "../../utilities/utils";
import { HiCurrencyDollar } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

function DonationDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0)

  const [modal, setModal] = useState(false);

  const getId = useParams();
  const donationId = getId.id;

  const donationDetails = useSelector((state) => state.donationDetails);
  const { loading, donation, error } = donationDetails;


  
  useEffect(() => {
    dispatch(listDonationDetails(donationId));
  }, [dispatch, donationId]);


  const paypalOptions = {
    "client-id": "YOUR_PAYPAL_CLIENT_ID",
    currency: "USD",
    intent: "capture",
  };

  // Define PayPal button styles
  const buttonStyles = {
    layout: "horizontal",
    color: "gold",
    shape: "rect",
    label: "paypal",
    
  };

  // Define onApprove and onError functions
  const onApprove = (data, actions) => {
    // Capture the payment and redirect to success page
    return actions.order.capture().then(function(details) {
      // TODO: Implement success page
      console.log("Payment successful", details);
    });
  };

  const onError = (error) => {
    console.log("PayPal error", error);
  };

 
  


  return (
    <PayPalScriptProvider >
    <div className="subpixel-antialiased min-h-screen inset-0 flex flex-col justify-center items-center font-sans    mx-auto lg:justify-center lg:align-center lg:text-centen rounded-b-2xl p-3 mt-[50px] ">
      {/* central div */}


      <div className="flex flex-col justify-center items-start content-center gap-2 md:gap-3 p-2 md:p-3 w-full md:w-[80%] lg:w-[80%]">
        {/* back button */}
        <motion.div
          onClick={() => navigate(-1)}
          className="mb-[20px] flex flex-row items-center content-center justify-center text-gray-500 hover:text-black min-w-[100px] rounded-full p-1 md:p-2 gap-1 md:gap-2 cursor-pointer"
        >
          <BsArrowLeft />
          <h1>Back</h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-3 justify-between items-start content-center ">
          {/* image and title */}
          <div className="flex flex-col ">
            {/* title */}
            <div className="flex flex-col  w-full">
              <img
                src={`${REACT_API_URL}${donation.donation_cover}`}
                className="w-full h-[400px] md:h-auto md:w-full rounded-xl lg:w-full lg:h-[600px] object-cover object-center drop-shadow-xl"
              />
            </div>

            {/* title */}
          </div>
          {/* description */}
          <div className=" flex flex-col gap-2  p-2  mt-5 md:mt-0">
            <div className="flex flex-col gap-2 text-sm font-bold">
              {donation?.name}
            </div>

            <div className="flex flex-row justify-between p-2  ">
              <div className="flex flex-col gap-2 justify-center  text-md items-start content-start">
                <h1 className="  font-semibold text-sm text-gray-500">
                  Collected
                </h1>
                <p className="text-sm border bg-gray-100 p-2 rounded-lg text-gray-600">
                {Intl.NumberFormat("en-US").format(donation?.total)}{" "}
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-center  text-md items-end content-start">
                <h1 className=" font-semibold text-sm text-gray-500">Target</h1>
                <p className="text-sm border bg-gray-100 p-2 rounded-lg text-gray-600">
                  
                  {Intl.NumberFormat("en-US").format(donation?.target)}{" "}
                </p>
              </div>
            </div>

            <p className="max-w-2xl">{donation.description}</p>

            <div className="flex  flex-col gap-1 mt-[30px]">
            <h1 className="  font-semibold text-sm text-gray-500">
                  Amount to Donate
                </h1>
                    <input
                    type="number"
                      className="p-2 border border-gray-100 min-h-[50px] bg-none outline-none rounded-xl placeholder:text-gray-600
                                    placeholder:text-[13px] placeholder:pl-4  text-[15px] "
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                      placeholder="Amount"
                    />
                  </div>

            <div className="w-full">
              


              <PayPalButtons
              className="rounded-xl"
      createOrder={(data, actions) => {
        // Create a PayPal order with the specified amount
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount,
              },
            },
          ],
        });
      }}
      onApprove={onApprove}
      onError={onError}
      options={paypalOptions}
      style={buttonStyles}
    />

             
            </div>
          </div>
        </div>
      </div>
    </div>
    </PayPalScriptProvider>
  );
}

export default DonationDetails;
