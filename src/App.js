import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";
import { useState } from "react";
function App() {

  const [modalIsVisible, setModalIsVisible] = useState(true)
  function handleHideModal() {
    setModalIsVisible(false)
  }
  function handleShowModal() {
    setModalIsVisible(true)
  }
  return (
    <>
    <MainHeader  onCreatePost = {handleShowModal}/>
    <main>
      <PostsList isPosting= {modalIsVisible} handleHideModal={handleHideModal}/>
    </main>
    </>
  );
}

export default App;
