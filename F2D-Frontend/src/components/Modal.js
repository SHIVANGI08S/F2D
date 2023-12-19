import React from 'react';

const Modal = ({ closeModal }) => {
    // const context = useContext(NoteContext);
  // const { info, getInfo } = context;
  // useEffect(() => {
  //   if (localStorage.getItem("authToken")) {
  //     getInfo();
  //   }
  // }, [getInfo]);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>User Profile</h2>
        <p>
        {/* Name: {info.name} */}
        sanya
        </p>
        <p>
        {/* Email: {info.mail} */}
        san@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Modal;
