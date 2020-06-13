import * as React from 'react';

export default function HelloWorld({ name }: { name: string }) {
  return (
    <div>
      Hello, <b data-testid="name">{name}</b>
    </div>
  );
}
