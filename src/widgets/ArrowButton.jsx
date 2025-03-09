"use client";

const ArrowButton = ({ onClick, direction }) => {
  const isLeft = direction === "left";

  return (
    <button
      onClick={() => {
        console.log(`${direction} arrow clicked`); // Debugging
        onClick(); // Call the actual function
      }}
      className="focus:outline-none"
      aria-label={`Arrow ${direction}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <circle cx="25" cy="25" r="25" fill="black" />
        <path
          d={
            isLeft
              ? "M19.1151 24.3778C18.5293 24.9636 18.5293 25.9134 19.1151 26.4991L28.6611 36.0451C29.2468 36.6309 30.1966 36.6309 30.7824 36.0451C31.3682 35.4593 31.3682 34.5095 30.7824 33.9238L22.2971 25.4385L30.7824 16.9532C31.3682 16.3674 31.3682 15.4177 30.7824 14.8319C30.1966 14.2461 29.2468 14.2461 28.6611 14.8319L19.1151 24.3778Z"
              : "M30.8849 24.3778C31.4707 24.9636 31.4707 25.9134 30.8849 26.4991L21.3389 36.0451C20.7532 36.6309 19.8034 36.6309 19.2176 36.0451C18.6318 35.4593 18.6318 34.5095 19.2176 33.9238L27.7029 25.4385L19.2176 16.9532C18.6318 16.3674 18.6318 15.4177 19.2176 14.8319C19.8034 14.2461 20.7532 14.2461 21.3389 14.8319L30.8849 24.3778Z"
          }
          fill="white"
        />
      </svg>
    </button>
  );
};

export default ArrowButton;
