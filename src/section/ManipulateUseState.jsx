import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';

const ManipulateUseState = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleAddTask(e) {
    e.preventDefault();
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.floor(Math.random() * Date.now()),
        name: newTask,
        completed: false,
      },
    ]);
    setNewTask('');
  }

  function handleUpdateTask(id) {
    const updateTask = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updateTask);
  }

  function handleRemoveTask(id) {
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask);
  }

  return (
    <div className={'w-full py-5'}>
      <div className={'text-center'}>
        <span className={'text-sm mb-2'}>Manipulate useState</span>
        <h2 className={'text-xl text-gray-400'}>Make Simple ToDo List </h2>
      </div>
      <div className={'w-full p-4 flex justify-center'}>
        <div className={'w-full max-w-lg'}>
          <Card>
            <Card.Title>
              <span className={'text-md'}>What's your agenda?</span>
            </Card.Title>
            <Card.Body>
              <form>
                <div className={'w-full flex justify-center gap-x-4'}>
                  <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                  <Button text={'Add List'} onClick={handleAddTask} />
                </div>
              </form>
              {tasks.length > 0 ? (
                <ol className={'space-y-2 py-4'}>
                  {tasks.map((task) => (
                    <li key={task.id} className='flex justify-between items-center p-2 bg-slate-600 rounded'>
                      <span>
                        {task.name} {task.completed === false ? '❌' : '✅'}
                      </span>
                      <div className={'flex gap-x-2'}>
                        <button
                          className={'px-2 py-1 border rounded border-slate-400'}
                          onClick={() => {
                            handleUpdateTask(task.id);
                          }}>
                          {task.completed === false ? 'Uncomplete' : 'Completed'}
                        </button>
                        <button
                          className={'px-2 py-1 border rounded border-slate-400'}
                          onClick={() => {
                            handleRemoveTask(task.id);
                          }}>
                          remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : null}
            </Card.Body>
            <Card.Footer>You have {tasks.length} Tasks</Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ManipulateUseState;
