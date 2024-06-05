"use client"
import React, { FormEvent } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react'

const Prompt = () => {

const [output, setOutput] = useState('')
const [ouputLoading, setOutputLoading] = useState (false)
const [outputError, setOutputError] = useState (false)

async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const formData = new FormData(e.target as HTMLFormElement)
  const prompt = formData.get("prompt")?.toString().trim()

  if (prompt) {
    try{
      setOutput('')
      setOutputError(false)
      setOutputLoading(true)

      const response = await fetch("/components/api/promptsubmit.ts" + encodeURIComponent(prompt))
      const body = await response.json() 
      setOutput(body.output)

    } catch(error){
      console.log(error)
      setOutputError(true)
    } finally {
      setOutputLoading(false)
    }
  }
}


const handleKeyPress = (event: any) => {
  if (event.key === "Enter") {
    event.preventDefault()
    event.handleSubmit()
}

}
return (
    <section className="flexCenter relative h-screen w-screen bg-cover bg-center hide-scrollbar" style={{backgroundImage: "url('/prompt-bg.png')"}}>
      <div className="flexCenter absolute bottom-0 h-screen w-screen bg-gradient-to-b from-black bg-opacity-90"></div>

      <div className="flex flex-col absolute left-10 top-36 w-1/2 h-1/3 leading-tight z-10">
      <div className="absolute left-0 top-0 text-start font-extrabold text-xl md:text-4xl text-white z-10">DESCRIBE YOUR 
      <br/>FANTASY
      <br/><span className="break-words leading-none gap-0 font-thin text-xs md:text-sm ">Explain the plot of your desired movie, series, or documentary. You can also type your movie preference like genre, duration, or movies from certain producer or played by specific actors.</span> 

      <form className='w-container relative'
            onSubmit={handleSubmit}>
          <input type='search' 
                 placeholder='Type something...' 
                 className='w-full my-4 p-2 rounded-full bg-slate-800 regular-18'
                // onChange={(e) => setUser(e.target.value)}
                 onKeyDown={handleKeyPress}
                 id='prompt-input'/>
          <button type='submit' 
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-4 bg-red-600 rounded-full"
                  disabled={ouputLoading}
                  >
                    <AiOutlineSearch/>
          </button>
      </form>
      {ouputLoading && "Please Wait..."}
      {outputError && "Something went wrong. Please try again later."}
      {output && <p>{output}</p>}


      <div className="font-light text-sm">Powered by ChatGPT 3.5 API</div>

      </div>

      
      </div>

    </section>
  )
}

export default Prompt
