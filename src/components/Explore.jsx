import { useNavigate } from "react-router-dom";
import { Crown } from "lucide-react";

const Explore = ({ customstyles }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex-box ">
      <a
        href="#"
        className={`${customstyles}`}
        onClick={() => navigate("/audioform")}
      >
        <Crown className="mr-3" />
        <p>Explore Now &nbsp;</p>
      </a>
    </div>
  );
};

export default Explore;