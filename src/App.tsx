import React, { useState } from "react";
import { createComponent } from "@lit/react";
import { TryOnModal } from "lit-sample-modal";

import "./App.css";

export const TryOnModalComponent = createComponent({
  tagName: "try-on-modal",
  elementClass: TryOnModal,
  react: React,
  events: {
    onClose: "close",
  },
});

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="card">
      <button onClick={handleOpen}>Open lit-modal</button>
      <TryOnModalComponent onClose={handleClose} open={isOpen} />
    </div>
  );
}

export default App;
