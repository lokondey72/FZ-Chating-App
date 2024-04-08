import HomeHeader from "../pages/HomeHeader";
import HomeItems from "../pages/HomeItems";

const Home = () => {
  const userFromlocal = JSON.parse(localStorage.getItem("user"));
  console.log("useFromlocal=======>", userFromlocal);
  return (
    <>
      <div className="w-full">
        <HomeHeader />
        <div className="w-full ml-auto bg-slate-400"></div>
        <div className="flex justify-center flex-wrap mx-20  mt-36 gap-14">
          <HomeItems
            imgUrl="/public/Rikto-ltd.jpg"
            usernam="Noteworthy technology acquisitions 2021"
            peragrap="Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order."
          />
          <HomeItems
            imgUrl="/public/WhatsApp-img.jpg"
            usernam="Noteworthy technology acquisitions 2021"
            peragrap="Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order."
          />
          <HomeItems
            imgUrl="/public/rikto-ltd-imgs.jpg"
            usernam="Noteworthy technology acquisitions 2021"
            peragrap="Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so
            "
          />
          <HomeItems
            imgUrl="/public/profile-bg-img.jpg"
            peragrap="Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order Here are the biggest enterprise technology acquisitions of 2021 so
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order."
          />
          <HomeItems
            imgUrl="/public/Rikto-ltd-1.jpg"
            usernam="Noteworthy technology acquisitions 2021"
            peragrap="Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so
            "
          />
        </div>
      </div>
    </>
  );
};

export default Home;
