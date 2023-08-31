import "./styles/App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Start from "./pages/Start";
// import About from "./pages/About";
// import Docs from "./pages/Docs";
// import SignUp from "./pages/SignUp";
// import SignIn from "./pages/SignIn";
// import Contact from "./pages/Contact";
import ChatBot from "./pages/Chatbot";

import { MessageSquare, X } from "lucide-react";
import { useState } from "react";
// import { auth } from "./config/firebase";
// import { useEffect, useState } from "react";
// import { ThemeProvider } from "@/components/ThemeProvider"

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <Router>
      {/* <ThemeProvider attribute="class" defaultTheme="system" storageKey="vite-ui-theme" enableSystem> */}

        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/docs" element={<Docs />} />

          <Route path="/start" element={<Start />} />

          <Route path="/about" element={<About />} />

          <Route path="/sign-in" element={<SignIn />} />

          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/contact" element={<Contact />} />*/}

          <Route path="/audioform" element={<AudioForm />} /> 
        </Routes>
        {/* {user ? (
          <> */}
            <NavigateToChatbotButton />

          {/* </>
        ) : (
          <></>
        )} */}
      {/* </ThemeProvider> */}
    </Router>
  );
}

function NavigateToChatbotButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatIconClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div
      // style={{
      //   position: "fixed",
      //   bottom: 0,
      //   right: 0,
      //   padding: "20px",
      //   zIndex: 1,
      // }}
      className="fixed bottom-0 right-0 p-10 z-100"
    >
      <div className="flex justify-end fixed bottom-4 right-4">
        <div
          onClick={handleChatIconClick}
          style={{ cursor: "pointer" }}
        >
          {!isChatOpen ? <MessageSquare className="bg-blue-500 hover:bg-blue-600 rounded-full w-[60px] h-[60px] p-3 text-white border-2 border-white fill-white" /> :
            <X className="bg-blue-500 hover:bg-blue-600 rounded-full w-[60px] h-[60px] p-3 text-white border-2 border-white fill-white" />}
        </div>
        {isChatOpen && <ChatBot />}
      </div>
    </div>
  );
}
export default App;