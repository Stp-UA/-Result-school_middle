import { useToggleArray } from './useToggleArray';

function Demo6() {
    const [value, toggle] = useToggleArray(['blue', 'orange', 'cyan', 'teal']);


    return (
        <div className='pb task3'>
            <h1>Задание #6</h1>
            <button onClick={() => toggle()}>
                {value}
            </button>
            <button onClick={() => toggle('orange')}>
                Передай orange
            </button>
        </div>
    );
}

export default Demo6
