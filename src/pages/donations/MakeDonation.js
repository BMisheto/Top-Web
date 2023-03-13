import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { listDonationDetails } from "../../features/actions/donationsActions";

function MakeDonation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const getId = useParams();
  const donationId = getId.id;

  const donationDetails = useSelector((state) => state.donationDetails);
  const { loading, donation, error } = donationDetails;

  // product detail dispatch
  useEffect(() => {
    dispatch(listDonationDetails(donationId));
  }, [dispatch, donationId]);

  return (
    <div className="subpixel-antialiased min-h-screen inset-0 flex flex-col justify-center items-center font-sans    mx-auto lg:justify-center lg:align-center lg:text-centen rounded-b-2xl p-3 mt-[100px] ">
      {/* central div */}

      <div className="inset-0">
        {/* select method */}
        <div className="flex flex-col gap-2 p-2">
          <h1 className="font-semibold">Select Method</h1>
          <div className="grid grid-cols-2 flex md:flex md:flex-row gap-2 cursor-pointer">
            <div className="flex  flex-col items-center content-center justify-center gap-2 bg-gray-50 border rounded-xl p-2">
              <h1 className="font-regular">Mpesa</h1>

              <div>
                <img
                  src="/logo-small.png"
                  className=" h-[150px] w-[150px] rounded-full object-cover"
                />
              </div>
            </div>
            <div className="flex  flex-col items-center content-center justify-center gap-2 bg-gray-50 border rounded-xl p-2 cursor-pointer">
              <h1 className="font-regular">Tigo Pesa</h1>

              <div>
                <img
                  src="/logo-small.png"
                  className=" h-[150px] w-[150px] rounded-full object-cover"
                />
              </div>
            </div>
            <div className="flex  flex-col items-center content-center justify-center gap-2 bg-gray-50 border rounded-xl p-2 cursor-pointer">
              <h1 className="font-regular">Tigo Pesa</h1>

              <div>
                <img
                  src="/logo-small.png"
                  className=" h-[150px] w-[150px] rounded-full object-cover"
                />
              </div>
            </div>
            <div className="flex  flex-col items-center content-center justify-center gap-2 bg-gray-50 border rounded-xl p-2 cursor-pointer">
              <h1 className="font-regular">Tigo Pesa</h1>

              <div>
                <img
                  src="/logo-small.png"
                  className=" h-[150px] w-[150px] rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>





        
      </div>
    </div>
  );
}

export default MakeDonation;
