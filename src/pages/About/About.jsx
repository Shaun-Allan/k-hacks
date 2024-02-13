import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>About page</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    </>
  );
};

export default About;
