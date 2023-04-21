import { useLocalStorage } from './useLocalStorage';

function Demo2() {
    const [token, { setItem, removeItem }] = useLocalStorage('token');

    return (
        <div className='task2'>
            <h1>Задание #2</h1>
            <p>
                Твой токен: {token}
            </p>
            <div>
                <button onClick={() => setItem('new-token')}>
                    Задать токен
                </button>
                <button onClick={() => removeItem()}>
                    Удалить токен
                </button>
            </div>
        </div>
    );
}

export default Demo2
