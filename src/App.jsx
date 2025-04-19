import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { GoogleGenAI } from "@google/genai"
const apiKey = import.meta.env.VITE_API_KEY;


function App() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("");
  const [AIResponse, setAIResponse] = useState("Please try again");
  console.log("starting")
  const ai = new GoogleGenAI( { apiKey: apiKey});

  async function sendToGemini(text) {
    console.log("in the async function send to gemini")
    const string1 = "This is text from a website. I need you to write bullet points about the main points and where you got them from.";
    const contentsText = string1.concat(" ", text);
    console.log("the prompt is ", contentsText)
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: contentsText,
      config: {
        temperature: 0.5,
        maxOutputTokens: 500,
      }
    });
    console.log("response is ", String(response.text))
    setAIResponse(String(response.text));

  };

  const handleChange = (event) => {
    console.log("inside the handle change")
    setText(event.target.value);
  };
  async function handleConfirm(){
    console.log("within the send to gemini")
    setFullText(text)
    console.log("The full text is", fullText)
    await sendToGemini(fullText);
  };

  return (
    <>
      <div>
      <label htmlFor="my-input">Enter text:</label>
      <input
        type="text"
        id="my-input"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleConfirm}>Confirm</button>
      {AIResponse && <p>Your Summary:<br></br> {AIResponse}</p>}
    </div>
    </>
  )
}

export default App
