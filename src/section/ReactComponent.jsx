import React from 'react';
import Button from '../components/Button';
import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';

const ReactComponent = () => {
  return (
    <>
      {/* React Component Start */}
      <div className={'w-full py-5 my-2'}>
        <h1 className='text-center p-4'>React Component</h1>
        <div className={'flex justify-center gap-x-2 p-2 '}>
          <Button>
            <IconBrandTwitter />
            Twitter
          </Button>
          <Button>
            <IconBrandFacebook />
            Facebook
          </Button>
        </div>
      </div>
      {/* React Component End */}
    </>
  );
};

export default ReactComponent;
