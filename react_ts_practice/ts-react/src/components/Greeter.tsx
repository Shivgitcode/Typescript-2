import React from "react";

interface GreeterProps {
  person: string;
}

export default function Greeter({ person }: GreeterProps): JSX.Element {
  return (
    <div>
      <h1>Hello,{person}</h1>
    </div>
  );
}

// const Greeter: React.FC = () => {
//   return <h1>Hello!!!</h1>;
// };

// export default Greeter;
