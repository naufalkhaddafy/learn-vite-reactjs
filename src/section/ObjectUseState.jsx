import React, { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import Label from '../components/Label';
import { IconBrandGithub } from '@tabler/icons-react';

const UseStateObject = () => {
  const [active, setActive] = useState(1);
  const [form, setForm] = useState({
    username: '',
    email: '',
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className={'w-full py-5'}>
      <div className={'text-center'}>
        <span className={'text-sm mb-2'}>Use State Object</span>
        <h2 className={'text-xl text-gray-400'}>Make Form useState Object</h2>
      </div>
      <div className={'flex justify-center gap-5 p-5'}>
        <Button
          onClick={() => setActive(1)}
          className={active === 0 ? 'bg-transparent border-2 border-blue-900' : ''}
          text={'Login'}></Button>
        <Button
          onClick={() => setActive(0)}
          className={active === 1 ? 'bg-transparent border-2 border-blue-900' : ''}
          text={'Register'}></Button>
      </div>
      <div className={'flex justify-center items-start gap-2 p-4 h-120'}>
        {active === 1 ? (
          <div className='max-w-sm w-full'>
            <form onSubmit={submit}>
              <Card>
                <Card.Title>Login</Card.Title>
                <Card.Body>
                  <div className='mb-6'>
                    <Label htmlFor='username' value={'Username'} />
                    <Input id={'username'} name={'username'} onChange={onChange} value={form.username} />
                  </div>
                  <div className='mb-6'>
                    <Label htmlFor='email' value={'Email'} />
                    <Input id={'email'} name={'email'} onChange={onChange} value={form.email} />
                  </div>
                </Card.Body>
                <Card.Footer>
                  <Button>
                    <IconBrandGithub />
                    Login
                  </Button>
                  <div className={'border rounded border-rose-900 p-4 mt-3'}>
                    <p>Username :{form.username || '-----'}</p>
                    <p>Email : {form.email || '------'}</p>
                  </div>
                </Card.Footer>
              </Card>
            </form>
          </div>
        ) : (
          <div className='max-w-sm w-full'>
            <Card>
              <Card.Title>Me Register</Card.Title>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default UseStateObject;
