import { PuffLoader } from "react-spinners";

const Loading = ({ loading }) => {
  return (
    loading && (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <PuffLoader size={100} color="#007BFF" />
      </div>
    )
  );
};

export default Loading;
