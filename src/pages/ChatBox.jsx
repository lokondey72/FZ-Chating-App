import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const ChatBox = () => {
  const db = getDatabase();
  const [chatImpot, setChatImpot] = useState("");
  const [chatReciver, setChatRecival] = useState([]);
  const [realtime, setRealtime] = useState(false);
  const user = useSelector((state) => state.userSlice.user);
  const friend = useSelector((state) => state.chatIdSlice.friendInfo);

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  const handelsend = () => {
    if (!chatImpot) {
      alert("Please type your message");
    } else {
      set(push(ref(db, "friendChat/")), {
        senderId: user.uid,
        message: chatImpot,
        reciverId: friend.friendId,
        reciverImg: friend.friendImg,
        timeNow: formatAMPM(new Date()),
      }).then(() => {
        setChatImpot("");
        setRealtime(!realtime);
      });
    }
  };

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "friendChat/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (
          item.val().senderId == user.uid &&
          item.val().reciverId == friend.friendId
        ) {
          arr.push({ ...item.val(), key: item.key });
        } else if (
          item.val().reciverId == user.uid &&
          item.val().senderId == friend.friendId
        ) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setChatRecival(arr);
    });
  }, [realtime]);

  // console.log(chatReciver);
  return (
    <div className="h-screen w-full">
      <div className="chatbox w-full lg:w-4/5 pb-4 ml-auto mt-8">
        <div className="flex p-3 gap-4 items-center border-b">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={friend?.friendImg} className="w-full" alt="alt" />
          </div>
          <div>
            <h2 className="text-xl font-primary text-white font-bold">
              {friend?.friendName}
            </h2>
          </div>
          <div className="ml-auto text-3xl text-white">
            <IoMdInformationCircleOutline />
          </div>
        </div>
        <div className="w-full h-full px-4 overflow-y-scroll">
          {/* sender box */}
          {chatReciver.map((item) =>
            item.senderId == user.uid ? (
              <div
                key={item.key}
                className="w-full flex flex-col items-end my-2"
              >
                <div className="max-w-[70%] w-fit rounded-xl rounded-br-sm py-2 px-3 bg-white text-primary ml-auto">
                  <p>{item.message}</p>
                </div>
                <p className="text-white">{item.timeNow}</p>
              </div>
            ) : (
              <div key={item.key} className="flex flex-col items-start my-2">
                <div className="w-full flex">
                  <div className="w-8 h-8 rounded-full overflow-hidden mt-auto mr-2">
                    <img
                      className="w-full h-full mr-2"
                      src={friend?.friendImg}
                      alt="User Avatar"
                    />
                  </div>
                  <div className="max-w-[60%] w-fit rounded-xl rounded-bl-sm py-2 px-3 bg-white text-primary">
                    <p>{item.message}</p>
                  </div>
                </div>
                <p className="text-white ml-10">{item.timeNow}</p>
              </div>
            )
          )}
        </div>
        <div className="sender-area ">
          <div className="input-place w-full mr-3 flex justify-between">
            <input
              onChange={(e) => setChatImpot(e.target.value)}
              id="myInput"
              placeholder="type your message..."
              className="send-input w-full"
              type="text"
              value={chatImpot}
            />
            <button onClick={handelsend} className="send">
              <IoSendSharp className="text-white" />
            </button>
          </div>
        </div>
        <div></div>
      </div>

      {/* <div className="chatbox h-full w-full sm:w-3/5 pb-4 ml-auto mt-8  bg-gray-200 no-scrollbar">
        <div className="flex border-b border-gray-400 items-center pb-2 my-7">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-5">
            <img
              className="w-full h-full"
              src={friend?.friendImg}
              alt="User Avatar"
            />
          </div>
          <p className="font-bold text-xl">{friend?.friendName}</p>
          <button className="text-3xl ml-auto">
            <IoMdInformationCircleOutline />
          </button>
        </div>

        <div className="h-full my-2 overflow-y-scroll">
          
          <div className="flex ">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
              <img
                className="w-full h-full mr-2"
                src={friend?.friendImg}
                alt="User Avatar"
              />
            </div>
            <p className="bg-white rounded-lg p-2 shadow mb-2 max-w-sm">
              Hi, how can I help you?
            </p>
          </div>
          
          <div className="my-2 flex items-center justify-end">
            <div className="bg-blue-500 text-white rounded-lg p-2 shadow mr-2 max-w-sm">
              Sure, I can help with that. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Voluptatem, deserunt? Ipsum
              inventore maiores nesciunt magnam dolore cum rem placeat.
              Perspiciatis eaque dolor porro nobis deleniti animi aliquid fugit
              alias id, officiis quae, facilis quos labore numquam ipsam maxime
              veritatis praesentium natus eum culpa voluptatum ut! Dolores quae
              nobis maxime unde!
            </div>
          </div>
          
        </div>
        <div className="bg-gray-100 w-full h-full ml-auto px-4 py-2">
          <div className="flex items-center">
            <input
              className="w-full border rounded-full py-2 px-4 mr-2"
              type="text"
              placeholder="Type your message..."
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
              <IoSendSharp />
            </button>
          </div>
        </div>
        <div className="w-full bg-gray-200 ">
        </div>
      </div> */}
    </div>
  );
};

export default ChatBox;
