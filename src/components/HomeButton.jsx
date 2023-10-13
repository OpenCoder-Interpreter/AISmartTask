import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const HomeButton = ({ customstyles }) => {
  const navigate = useNavigate();

  return (
    <div className="my-8 w-48 flex-box text-center border rounded-md shadow-md hover:shadow-red shadowred">
      <a
        href="#"
        className={`${customstyles}`}
        onClick={() => navigate("https://t.me/AI_Task_Manager_Bot")}
      >
        <p className="pl-3 p-4">Explore Now</p>
      </a>
    </div>
  );
};

export default HomeButton;
