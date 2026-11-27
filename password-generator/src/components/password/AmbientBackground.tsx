import React from 'react'

const AmbientBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {/* Main top mint glow */}
    <div className="absolute -top-80 left-1/2 h-[750px] w-[1100px] -translate-x-1/2 rounded-full bg-[#238A6B]/[0.21] blur-[140px]" />

    {/* Left emerald glow */}
    <div className="absolute -left-64 top-[20%] h-[650px] w-[650px] rounded-full bg-emerald-500/[0.11] blur-[130px]" />

    {/* Right blue glow */}
    <div className="absolute -right-64 top-[25%] h-[650px] w-[650px] rounded-full bg-blue-500/[0.11] blur-[140px]" />

    {/* Bottom purple-blue glow */}
    <div className="absolute -bottom-96 left-1/2 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-indigo-500/[0.08] blur-[150px]" />

    {/* Central mint light */}
    <div className="absolute left-1/2 top-[35%] h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#8DE2C5]/[0.055] blur-[120px]" />

    {/* Grid overlay */}
    <div className="page-grid absolute inset-0 opacity-35" />
  </div>
  )
}

export default AmbientBackground
