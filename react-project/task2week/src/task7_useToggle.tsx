import { useToggle } from './useToggle';

function Demo7() {
    const [value, toggle] = useToggle();


    return (
        <div className='pb task7'>
            <h1>useToggle (тренировался с типизацией)</h1>
            <button onClick={() => toggle()}>
                {value ? 'true' : 'false'}
            </button>
        </div>
    );
}

export default Demo7
