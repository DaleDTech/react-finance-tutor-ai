// const Answer = ({ answer }) => {
//   var keyID = 0;
//   return (
//       <div>
//           {answer.split('\n').map((paragraph) => (
//               <p key={keyID++}>{paragraph}</p>
//           ))}
//           <br/>
//       </div>
//   );
// };

function App() {

const gptTrigger = async () => {
    const API_KEY = process.env.REACT_APP_SECRET_KEY;
    // question to be an input on front end
    var gptQuestion = "Explain the futures market to someone with a basic understanding of the stock market";
    const options = {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: gptQuestion }],
        max_tokens: 2000,
      })
    }
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', options)
     
      const data = await response.json();
  
      const innerAnswer = data.choices[0].message.content;
      
      console.log(innerAnswer);
  
      document.getElementById("answerDiv").innerText = innerAnswer;

    }

    catch (error){
      console.error(error)
      document.getElementById("answerDiv").innerText = "No Answer found"

    }
  }

  
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    <button onClick={gptTrigger}> Finance App Button  </button>
    
  

   
    <br />
    <p id="answerDiv" > answer goes here </p> 
    
    </div>
  );
}

export default App;
