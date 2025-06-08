import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 opacity-10">
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Cpath d='M30 30l15-15v30l-15-15zm0 0l-15 15v-30l15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
