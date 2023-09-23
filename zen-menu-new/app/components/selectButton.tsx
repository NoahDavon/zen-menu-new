import React from 'react'

type Props = {
    highlighted: Boolean;
    name: String;
    onClick: ()=> void;
}

export default function SelectButton({highlighted, name, onClick}: Props) {

  return (
    <div onClick={(onClick)} className={' font-sans text-xs rounded-md p-4 m-1 font-semibold border' + (highlighted? ' bg-orange-800 text-gray-200 border-orange-400 border-2': ' bg-white text-black border-orange-900')}>
        {name}
    </div>
  )
}