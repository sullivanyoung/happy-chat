import React from 'react';

interface AnimalPageProps {
  count: number;
  setCount: (arg0: number) => void;
}

export const AnimalPage: React.FC<AnimalPageProps> = ({ count, setCount }) => {
  return (
    <div>
      Animal Here
      <button
        className="mt-10 rounded-lg p-2 bg"
        onClick={() => setCount(count - 1)}
      >
        Back
      </button>
    </div>
  );
};
