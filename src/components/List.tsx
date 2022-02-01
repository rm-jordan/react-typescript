import React from 'react';

interface IProps {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function List(props: IProps) {
  return <div>

    <h2>I am a list!</h2>
  </div>;
}

export default List;
