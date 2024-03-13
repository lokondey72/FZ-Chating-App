import HomeItems from "./pages/HomeItems";

const Home = () => {
  return (
    <div className="w-full my-10">
      <div className="flex justify-center flex-wrap gap-14">
        <HomeItems
          imgUrl="/public/uploded-you-img.jpg"
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
            far, in reverse chronological order."
        />
        <HomeItems
          imgUrl="/public/profile-bg-img.jpg"
          peragrap="Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order."
        />
      </div>
    </div>
  );
};

export default Home;
