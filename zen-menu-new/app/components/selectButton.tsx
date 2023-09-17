import React from 'react'

type Props = {
    highlighted: Boolean;
    name: String;
    onClick: ()=> void;
}

export default function SelectButton({highlighted, name, onClick}: Props) {

  return (
    <div onClick={(onClick)} className={' rounded-md p-4 m-4 font-semibold border border-orange-900 ' + (highlighted? ' bg-orange-800 text-gray-200': ' bg-white text-black')}>
        {name}
    </div>
  )
}