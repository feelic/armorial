import React from "react";

export function Background() {
  return (
    <path
      id="background"
      style={{
        fill: "white",
        fillOpacity: "1",
        stroke: "none",
        display: "inline"
      }}
      d="M 300.08899,659 C 300.08899,659 598.73903,559.11632 598.39585,389.8738 L 599.00606,1.0000006 1.0060583,1.0000006 1.0060583,390.07719 C 1.0722067,560.18592 300.08899,659 300.08899,659 z"
    />
  );
}
export function Glow() {
  return (
    <React.Fragment>
      {" "}
      <defs id="defs6">
        <linearGradient id="linearGradient2893">
          <stop
            style={{ stopColor: "white", stopOpacity: 0.20 }}
            offset="0"
          />
          <stop
            offset="0.19"
            style={{ stopColor: "white", stopOpacity: 0.15 }}
          />
          <stop
            style={{ stopColor: "#6b6b6b", stopOpacity: 0.025 }}
            offset="0.6"
          />
          <stop
            style={{ stopColor: "black", stopOpacity: 0.025 }}
            offset="1"
          />
        </linearGradient>
        <radialGradient
          xlinkHref="#linearGradient2893"
          id="radialGradient11919"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.551284,0,0,1.350335,-227.8943,-51.2635)"
          cx="276.81024"
          cy="187.12495"
          fx="276.81024"
          fy="187.12495"
          r="300"
        />
      </defs>
      <path
        id="glow"
        style={{
          fill: "url(#radialGradient11919)",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none"
        }}
        d="M 1.6189022,1.5 1.5,390.23149 C 1.6428975,472.93375 72.043953,533.84036 103.84234,556.18988 135.64071,578.53942 180.4586,607.47248 208.4626,621.02054 236.46658,634.5686 273.23628,649.9336 299.86723,658.5 330.03216,648.89958 350.24896,639.57613 382.35332,624.28025 414.45769,608.98436 457.48501,584.57194 499.92142,553.4516 542.35783,522.33126 597.99655,463.78207 598.5,389.70825 L 597.0719,1.5 1.6189022,1.5 z"
      />
    </React.Fragment>
  );
}
export function Border() {
  return (
    <path
      d="M 300.08187,658.5 C 300.08187,658.5 599.17904,560.17272 598.49885,390 L 597.00032,1.49999 2.9986559,1.49999 1.5001414,390 C 1.258951,560.45862 300.08187,658.5 300.08187,658.5 z"
      style={{
        fill: "none",
        stroke: "#000000",
        strokeWidth: 2.99999094,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeOpacity: 1,
        strokeDasharray: "none"
      }}
      id="border"
    />
  );
}
