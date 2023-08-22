function App() {

var innerAnswer = "Answer Goes here"
const gptTrigger = async () => {
    const API_KEY = process.env.REACT_APP_SECRET_KEY;
    var gptQuestion = "Explain Quant Trading to someone who knows math up to Calc 2";
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
      const data = await response.json()
      console.log("Content Answer:")
      console.log(data.choices[0].message.content)
      document.getElementById("answerDiv").innerHTML = data.choices[0].message.content;
    }

    catch (error){
      console.error(error)

    }
  };

  
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
