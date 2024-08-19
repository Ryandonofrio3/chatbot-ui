// icon:health-recognition | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react"
interface ChatbotUISVGProps {
  height: number
  width: number
}

const ChatbotUISVG: React.FC<ChatbotUISVGProps> = ({ height, width }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height={height}
      width={width}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2M8.603 9.61a2.04 2.04 0 012.912 0L12 10l.5-.396a2.035 2.035 0 012.897.007 2.104 2.104 0 010 2.949L12 16l-3.397-3.44a2.104 2.104 0 010-2.95z" />
    </svg>
  )
}

export default ChatbotUISVG
