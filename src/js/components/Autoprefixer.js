import React from 'react'

const Autoprefixer = ({ svgRef, title, ...props }) => (
  <svg
    viewBox="0 0 256 193"
    preserveAspectRatio="xMinYMin meet"
    width="1em"
    height="1em"
    ref={svgRef}
    {...props}
  >
    <title>{title}</title>
    <path
      d="M62.26 192.232h30.902l9.543-32.72h47.717l9.544 32.72h32.72L128.154 0 62.26 192.232zm65.894-108.613l16.36 52.716h-32.72l16.36-52.716zm127.7 70.893l-3.18-13.179-67.26-6.816 8.635 23.177 61.805-3.182zM70.44 136.335L3.181 143.15 0 156.331l62.26 3.18 8.18-23.176z"
      fill="#DD3835"
    />
  </svg>
)

export default Autoprefixer
