import { useEffect, useState } from "react";
export function Card({ title }) {
   
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState( );

  useEffect(() => {
    console.log(`${title} has been liked:${hasLiked}`);
  });

  return (
    <div className="card" onClick={()=>{setCount(count+1)}}>
      <h2>{title}-{count}</h2>

      <button
        onClick={() => {
          setHasLiked(!hasLiked);
        }}
      >
        {hasLiked ? "Liked" : "like"}
      </button>
    </div>
  );
}


