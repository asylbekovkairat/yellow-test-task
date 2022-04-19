import Api from "../Api/Api";


export default function LetMeIn({ setAuth }) {
  const letinAuth = () => {
    Api.postLetMeIn({
      uuid: "hello"
    })
    .then(res => setAuth(res.data.response));
  };

  return (
    <>
      <div className="modalWindow">
        <div className="letMeIn_modalWindow">
          <img src="./images/bear-face.svg" alt="bear-face" />
          <button className="link_to_jogsPage" onClick={letinAuth}>
            Let Me In
          </button>
        </div>
      </div>
    </>
  );
}
