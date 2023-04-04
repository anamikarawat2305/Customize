import React from 'react'

import CustomButton from './CustomButton';

// AIPicker component is used to ask AI for a logo or full image and to display the generated image in the Image component and called the backend API to generate the image
// It takes in the prompt, setPrompt, generatingImg, and handleSubmit props from the App component 
// It returns a textarea for the user to enter their prompt, and two buttons to ask AI for a logo or full image

// If the user is currently waiting for AI to generate an image, the buttons are disabled and a "Asking AI..." button is displayed
// If the user is not waiting for AI to generate an image, the buttons are enabled and the user can click on them to ask AI for a logo or full image
// The textarea is a controlled component, so the value is set to the prompt state and the onChange event handler is set to the setPrompt function

// The handleSubmit function is passed in from the App component and is called when the user clicks on the AI Logo or AI Full buttons
// The handleSubmit function takes in the type parameter, which is either "logo" or "full" and is used to determine which AI model to use

// The CustomButton component takes in the type, title, handleClick, and customStyles props
// The type prop is used to determine the type of button to display, either "outline" or "filled"
// The title prop is used to display the text on the button
// The CustomButton component is used to display the AI Logo and AI Full buttons

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea 
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />

            <CustomButton 
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker