import React from "react";

const AnotherGroup = ({ data }) => {
  return (
    <>
      <div className="w-full lg:w-1/2 flex cursor-pointer items-center my-5 gap-5">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={data?.createByPhoto} alt="rikto-ltd-imgs" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary">{data?.groupName}</h2>
          <p className="text-lg font-normal text-secandari">
            Admin: {data?.createBy}
          </p>
        </div>
        <div className="ml-auto">
          <p>Yesterday</p>
          <p>10:30 PM</p>
        </div>
      </div>
    </>
  );
};

export default AnotherGroup;
