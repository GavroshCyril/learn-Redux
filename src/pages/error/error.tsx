import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  const handleComeBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <img
        src="https://media.istockphoto.com/id/1325818489/vector/404-page-not-found-use-it-for-print-or-web-banner-design.jpg?s=612x612&w=0&k=20&c=DUwfvjeYnVoeCMK3t7CTp-xcCRFfFJe1pzJ-yhk-c_k="
        alt=""
      />
      <button onClick={handleComeBack}>Come back</button>
    </>
  );
};
