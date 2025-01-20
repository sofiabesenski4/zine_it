import { ReactElement } from 'react';
import React from 'react';
import { Link } from 'react-router';

type ButtonLinkProps = {
  text: string;
  destination: string;
  children?: ReactElement;
};

const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
  return (
    <Link to={props.destination}>
      <div className='bg-stone-300 p-2 hover:bg-sky-700' type='submit'>
        {props.text}
      </div>
    </Link>
  );
};

export default ButtonLink;
