import React, { useState, useEffect } from "react";
import "../css/Chatbot.css";

const Chatbot = () => {
  const [isChatbotCollapsed, setChatbotCollapsed] = useState(true);
  const [messages, setMessages] = useState([]);

  const toggleChatbot = () => {
    setChatbotCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const handleSendMessage = () => {
    const messageInput = document.getElementById("message");
    const message = messageInput.value.trim();

    if (message === "") {
      alert("Please enter a message before sending.");
      return;
    } else {
      addMsg(message);
      messageInput.value = "";
    }
  };

  const addMsg = (msg) => {
    createElement(msg);

    setTimeout(() => {
      addResponseMsg(msg);
    }, 1000);
  };

  const createElement = (msg) => {
    if (!msg.trim()) {
      return;
    }

    const div = document.createElement("div");
    div.innerHTML =
      "<span style='flex-grow:1'></span><div class='chat-message-sent'>" +
      msg +
      "</div>";
    div.className = "chat-message-div";
    document.getElementById("message-box").appendChild(div);
    document.getElementById("message-box").scrollTop =
      document.getElementById("message-box").scrollHeight;
  };

  const createBotResponseElement = (msg) => {
    if (!msg.trim()) {
      return;
    }

    const div = document.createElement("div");
    div.innerHTML = "<div class='chat-message-received'>" + msg + "</div>";
    div.className = "chat-message-div";
    document.getElementById("message-box").appendChild(div);
    document.getElementById("message-box").scrollTop =
      document.getElementById("message-box").scrollHeight;
  };

  const addResponseMsg = (msg) => {
    let input = cleanInput(msg);

    if (
      searchWord(input, "hi") ||
      searchWord(input, "hello") ||
      searchWord(input, "hey")
    ) {
      return getHello();
    } else if (searchWord(input, "bye") || searchWord(input, "see you")) {
      return getGoodbye(input);
    } else if (searchWord(input, "appointment") || searchWord(input, "book")) {
      return getAppointment(input);
    } else if (
      searchWord(input, "department") ||
      searchWord(input, "speciality") ||
      searchWord(input, "specialities")
    ) {
      return getDepartments(input);
    } else if (searchWord(input, "thank") || searchWord(input, "ok")) {
      return getThankyou(input);
    } else if (
      searchWord(input, "location") ||
      searchWord(input, "contact") ||
      searchWord(input, "phone")
    ) {
      return getLocation(input);
    } else if (searchWord(input, "sorry") || searchWord(input, "don't know")) {
      return getReplySorry(input);
    } else if (
      searchWord(input, "cardiology") ||
      searchWord(input, "cardiologist") ||
      searchWord(input, "heart")
    ) {
      return getCardiologyDetails(input);
    } else if (
      searchWord(input, "general medicine") ||
      searchWord(input, "generalmedicine") ||
      searchWord(input, "medicine") ||
      searchWord(input, "internal medicine") ||
      searchWord(input, "physician") ||
      searchWord(input, "family physician")
    ) {
      return getGeneralMedicineDetails(input);
    } else if (
      searchWord(input, "nephrology") ||
      searchWord(input, "nephro") ||
      searchWord(input, "nephrologist") ||
      searchWord(input, "dialysis")
    ) {
      return getNephrologyDetails(input);
    } else if (
      searchWord(input, "pediatrics") ||
      searchWord(input, "pediatric") ||
      searchWord(input, "pediatrician") ||
      searchWord(input, "infant")
    ) {
      return getPediatricsDetails(input);
    } else if (
      searchWord(input, "orthopedics") ||
      searchWord(input, "ortho") ||
      searchWord(input, "orthopedist")
    ) {
      return getOrthopedicsDetails(input);
    } else if (searchWord(input, "ent")) {
      return getEntDetails(input);
    } else if (
      searchWord(input, "emergency medicine") ||
      searchWord(input, "emergency")
    ) {
      return getEmergencyMedicineDetails(input);
    } else if (
      searchWord(input, "palliative") ||
      searchWord(input, "home care") ||
      searchWord(input, "home")
    ) {
      return getPalliativeCareDetails(input);
    } else if (searchWord(input, "wrong")) {
      return getReplyWrong(input);
    } else {
      return getNoAnswer(input);
    }
  };

  // Other functions (getHello, getGoodbye, getAppointment, etc.) are not changed.
  const getHello = () => {
    let answer = "Hi";
    createBotResponseElement(answer);
  };

  const getReplyWrong = () => {
    let answer = "I'am sorry.";
    createBotResponseElement(answer);
  };

  const getOpTime = () => {
    let answer = "Op timing is 9AM t0 6";
    createBotResponseElement(answer);
  };

  const getGoodbye = () => {
    let answer = "Nice talking to you!";

    createBotResponseElement(answer);
  };
  const getReplySorry = () => {
    let answer = "That's ok";

    createBotResponseElement(answer);
  };

  const getAppointment = () => {
    let answer =
      "Please book your appointment by calling this number 0469-2782262";
    createBotResponseElement(answer);
  };

  const getNoAnswer = () => {
    let answer = "Sorry, please try again.";
    let answer2 =
      "For more queries please contact GMM Hospital. phone:0469-2782262";
    createBotResponseElement(answer);
    setTimeout(() => {
      createBotResponseElement(answer2);
    }, 1000);
  };

  const getLocation = () => {
    let answer = `Mallappally East, P O,
  Pathanamthitta ,Kerala
  Phone: 0469-2782262,
  8281161330
    `;
    createBotResponseElement(answer);
  };

  const getThankyou = () => {
    let answer = "you're welcome";
    createBotResponseElement(answer);
  };

  // Set a flag variable to keep track of whether the welcome message has been displayed
  let welcomeMessageDisplayed = false;

  // Function to display the welcome message
  const displayWelcomeMessage = () => {
    let answer = "Hi, I'm Dr. Bobo. How can I help you?";
    setTimeout(() => {
      createBotResponseElement(answer);
    }, 4000);

    // Set the flag variable to true
    welcomeMessageDisplayed = true;
  };

  // Check if the welcome message has already been displayed
  useEffect(() => {
    if (!welcomeMessageDisplayed) {
      displayWelcomeMessage();
      setTimeout(() => {
        getWelcomeUserClickButtons();
      }, 4500);
    }
  }, []);

  const cleanInput = (msg) => {
    // - Change all characters in lowercase
    // - Remove '?'
    // - Replace multiple spaces with one space
    // - Remove trailing space
    return msg.toLowerCase().replace("?", "").replace(/  +/g, " ").trim();
  };

  const searchWord = (str, word) => {
    return str.indexOf(word) !== -1;
  };

  //DEPARTMENTS
  //-----------

  const getCardiologyDetails = () => {
    let answer =
      "The department of cardiology diagonizes and provides treatment for disorders related to heart and cardiovascular system. We provide OPD based care for our patients.";
    let docDetails = "Our cardiologist is Dr Philipose John (MBBS, MD, DM)";
    let opTime = " OP Timing is Saturday 12.00PM – 1.00PM";
    createBotResponseElement(answer);
    setTimeout(() => {
      createBotResponseElement(docDetails);
    }, 1000);
    setTimeout(() => {
      createBotResponseElement(opTime);
    }, 2000);
  };

  const getGeneralMedicineDetails = () => {
    let answer =
      "The department of general medicine deals with the prevention, diagnosis, and treatment of adult diseases. With experienced doctors in the field the department provides the best possible primary care.";
    let docDetails1 = "Our Chief Physician is Dr N Damodaran (MBBS, MD) ";
    let opTime1 = " OP Timing is Monday- Saturday 6.00 PM- 9.00 PM";
    let docDetails2 = "Our Physician is Dr K. A Chacko (MBBS, FCAMS)";
    let opTime2 = " OP Timing is Monday, Wednesday, Friday 9AM- 12.30PM";
    let docDetails3 = "Our Physician is Dr Binoy G Russel (MBBS, FCAMS) ";
    let opTime3 = " OP Timing is Tuesday, Thursday 10AM- 1.00PM";

    createBotResponseElement(answer);
    setTimeout(() => {
      createBotResponseElement(docDetails1);
    }, 1000);
    setTimeout(() => {
      createBotResponseElement(opTime1);
    }, 2000);
    setTimeout(() => {
      createBotResponseElement(docDetails2);
    }, 3000);
    setTimeout(() => {
      createBotResponseElement(opTime2);
    }, 4000);
    setTimeout(() => {
      createBotResponseElement(docDetails3);
    }, 5000);
    setTimeout(() => {
      createBotResponseElement(opTime3);
    }, 6000);
  };

  const getNephrologyDetails = () => {
    let answer =
      " The department provides OPD based medical to diseases related to kidney.";
    let docDetails =
      "Our Consultant Nephrologist is Dr Sneha Anna Joy (MBBS, MD, DM)";
    let opTime = " OP Timing is  1st & 3rd Saturday 11.00 AM- 12.00PM";
    createBotResponseElement(answer);
    setTimeout(() => {
      createBotResponseElement(docDetails);
    }, 1000);
    setTimeout(() => {
      createBotResponseElement(opTime);
    }, 2000);
  };

  const getPediatricsDetails = () => {
    let answer =
      "The department provides medical care to the infants, children, adolescents, and young adults.";
    let docDetails = "Our Pediatrician is Dr Sunnychen Devasia (MBBS, DCH)";
    let opTime = " OP Timing is Monday- Saturday 11.30 AM- 1.00 PM";
    createBotResponseElement(answer);
    setTimeout(() => {
      createBotResponseElement(docDetails);
    }, 1000);
    setTimeout(() => {
      createBotResponseElement(opTime);
    }, 2000);
  };
  const getOrthopedicsDetails = () => {
    let answer =
      "The department Provide medical care to issues related to musculoskeletal system and treating injuries to bones, joints, ligaments, or tendons.";
    let docDetails =
      "Our Orthopedic Surgeon is Dr Varkey S Kulangara (MBBS, MS, DNB, MRCS)";
    let opTime = " OP Timing is Monday, Tuesday, Thursday 5.30PM- 8.00PM";
    createBotResponseElement(answer);
    setTimeout(() => {
      createBotResponseElement(docDetails);
    }, 1000);
    setTimeout(() => {
      createBotResponseElement(opTime);
    }, 2000);
  };
  const getEntDetails = () => {
    let answer =
      "The department provide treatment to diseases related to Ear, Nose, and Throat.";
    let docDetails = "Our ENT Surgeon is Dr Kiran Babu (MBBS, MS)";
    let opTime = " OP Timing is  Tuesday, Friday 4.00PM- 6.00PM";
    createBotResponseElement(answer);
    setTimeout(() => {
      createBotResponseElement(docDetails);
    }, 1000);
    setTimeout(() => {
      createBotResponseElement(opTime);
    }, 2000);
  };
  const getEmergencyMedicineDetails = () => {
    let answer =
      "The department provide 24*7 emergency care to patients who need immediate care.";
    let docDetails =
      "Our Casualty Medical Officers are Dr Rohan Chacko Jacob (MBBS) and Dr Sara Jacob (MBBS)";
    createBotResponseElement(answer);
    setTimeout(() => {
      createBotResponseElement(docDetails);
    }, 1000);
  };
  const getPalliativeCareDetails = () => {
    let answer =
      "The department provide treatment for  bedridden patients and others who cannot normally go to a hospital, and give medical care and support, with the help of a mobile clinic. Serious patients are referred to hospitals for further investigation and treatment.    ";
    createBotResponseElement(answer);
  };

  const getDepartments = () => {
    let answer = `Our departments are`;
    let dep1 = "General medicine";
    let dep2 = "Cardiology";
    let dep3 = "Pediatrics";
    let dep4 = "Orthopedics";
    let dep5 = "Nephrology";
    let dep6 = "ENT";
    let dep7 = "Emergency medicine";
    let dep8 = "Home and palliative care";
    setTimeout(() => {
      createBotResponseElement(answer);
      setTimeout(() => {
        createBotResponseElementButton(dep1, getGeneralMedicineDetails);
        setTimeout(() => {
          createBotResponseElementButton(dep2, getCardiologyDetails);
          setTimeout(() => {
            createBotResponseElementButton(dep3, getPediatricsDetails);
            setTimeout(() => {
              createBotResponseElementButton(dep4, getOrthopedicsDetails);
              setTimeout(() => {
                createBotResponseElementButton(dep5, getNephrologyDetails);
                setTimeout(() => {
                  createBotResponseElementButton(dep6, getEntDetails);
                  setTimeout(() => {
                    createBotResponseElementButton(
                      dep7,
                      getEmergencyMedicineDetails
                    );
                    setTimeout(() => {
                      createBotResponseElementButton(
                        dep8,
                        getPalliativeCareDetails
                      );
                    }, 1000);
                  }, 900);
                }, 800);
              }, 700);
            }, 600);
          }, 500);
        }, 400);
      }, 300);
    }, 200);
  };

  const getWelcomeUserClickButtons = () => {
    let answer1 = "Departments";
    let answer2 = "Location & Contact";
    setTimeout(() => {
      createBotResponseElementButton(answer1, getDepartments);
      setTimeout(() => {
        createBotResponseElementButton(answer2, getLocation);
      }, 500);
    }, 1600);
  };

  const createBotResponseElementButton = (msg, button_function) => {
    const div = document.createElement("div");
    div.innerHTML =
      "<div class='btn border bg-white text-danger chat-button-message-received'>" +
      msg +
      "</div>";

    // Add event listener to invoke functions sequentially
    div.firstChild.addEventListener("click", function () {
      createElement(msg);
      setTimeout(button_function, 2000);
    });

    div.className = "chat-message-div";
    document.getElementById("message-box").appendChild(div);
    document.getElementById("message-box").scrollTop =
      document.getElementById("message-box").scrollHeight;
  };

  // Render the chat UI and messages here

  return (
    <div
      id="chatbot"
      className={
        isChatbotCollapsed ? "main-card chatbot-collapsed" : "main-card"
      }
    >
      <button id="chatbot_toggle" onClick={toggleChatbot}>
        <img
          src="https://heronavbar.netlify.app/assets/img/chatbot/chatbot.jpeg"
          alt=""
          srcSet=""
        />
        <i className="bx bxs-chevron-down"></i>
      </button>
      <div className="main-title">
        <div>
          <img src="./assets/img/chatbot/chatbot.jpeg" alt="" srcSet="" />
        </div>
        <span>Dr. Bobo</span>
      </div>
      <div className="chat-area" id="message-box">
        {/* Render the messages here */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.sender === "user" ? "user-message" : "chatbot-message"
            }
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="line"></div>
      <div className="input-div" id="userInput">
        <input
          className="input-message"
          name="message"
          type="text"
          id="message"
          placeholder="Type your message ..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <button className="input-send" onClick={handleSendMessage}>
          <i className="bx bxs-send fs-5"></i>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
